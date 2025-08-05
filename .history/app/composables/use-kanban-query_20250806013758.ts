import { KANBAN_DATA } from "@/components/kanban/kanban.data";
import { useQuery } from "@tanstack/vue-query";
import type { Models } from "appwrite";

interface IDealDocument extends Models.Document, IDeal {}

export function useKanbanQuery() {
  const {  } = useNuxtApp()
  const { databases } = getAppwrite();

  return useQuery({
    queryKey: ["deals"],
    queryFn: () =>
      databases.listDocuments<IDealDocument>(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = [...KANBAN_DATA];

      data.documents.forEach((deal) => {
        const column = newBoard.find((col) => col.id === deal.status);
        if (column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: column.name,
          });
        }
      });

      return newBoard;
    },
  });
}

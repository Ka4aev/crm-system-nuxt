import { KANBAN_DATA } from "~/components/kanban/kanban.data"
import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS, type IDeal } from "#shared"
import { type Models } from "appwrite";

const { databases } = getAppwrite()

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: () => databases.listDocuments<Models.Document<IDeal>>(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = [...KANBAN_DATA]
      const deals = data.documents
      console.log(deals, newBoard);

      for (const deal of deals) {
        const column = newBoard.find(col => col.id === deal.status)
        if (column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: column.name,
          })
        }
      }
      return newBoard
    },
  })
}

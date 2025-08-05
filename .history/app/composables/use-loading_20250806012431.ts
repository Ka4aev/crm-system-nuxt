export const useLoading = () => {
  const isLoading = useState<Readonly<boolean>>("loading", () => true);

  return {
    isLoading,
    setLoading: (data: boolean) => (isLoading.value = data),
  };
};

export const useLoading = () => {
  const isLoading = useState<Readonly<boolean>>("loading", () => false);

  return {
    isLoading,
    setLoading: (data: boolean) => (isLoading.value = data),
  };
};

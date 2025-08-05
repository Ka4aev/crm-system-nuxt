export const useLoading = () => {
  const isLoading = useState<Readonly<boolean>>("loading", () => true);

  const setLoading = (data: boolean) => {
    isLoading.value = data;
  };

  return {
    isLoading: readonly(isLoading),
    setLoading,
  };
};

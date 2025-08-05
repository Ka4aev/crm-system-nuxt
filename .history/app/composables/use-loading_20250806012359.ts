export const useLoading = () => {
  const isLoading = useState("loading", () => true);

  const setLoading = (data: boolean) => {
    isLoading.value = data;
  };

  return {
    isLoading: readonly(isLoading),
    setLoading,
  };
};

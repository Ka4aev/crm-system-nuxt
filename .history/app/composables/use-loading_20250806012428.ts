export const useLoading = () => {
  const isLoading = useState<Readonly<boolean>>("loading", () => true);

  const setLoading = ;

  return {
    isLoading,
    setLoading,
  };
};

export const convertToString = (initialStateSearch: initialStateSearchType) => {
  const data = Object.values(initialStateSearch);
  return data.filter(Boolean).join(" ");
};

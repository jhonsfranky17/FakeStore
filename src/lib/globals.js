export const API_BASE_URL = "https://fakestoreapi.com/";

export const shortenString = (string = "") => {
  const MAX_SIZE = 90;
  if (string.length <= MAX_SIZE) return string;
  const shortenedString = string.substring(0, MAX_SIZE);
  return shortenedString + "...";
};

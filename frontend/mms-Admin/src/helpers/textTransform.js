export const titleCase = (str) =>
  str
    ? str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

export const initialsCase = (str) =>
  str
    ? str
        .toUpperCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join(" ")
    : "";

export const capitalizeFirstWord = (string) => {
  const words = string.split(" ");
  const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  const remainingWords = words.slice(1).join(" ");

  return `${firstWord} ${remainingWords}`;
};

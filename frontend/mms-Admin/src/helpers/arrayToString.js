const arrayToString = (array) => {
  return Array.isArray(array) ? array.join(", ") : null;
};

export default arrayToString;

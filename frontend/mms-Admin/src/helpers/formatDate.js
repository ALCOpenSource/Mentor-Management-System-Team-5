const formatDate = (value, type = "long") => {
  let date = new Date(value);
  const options = {
    day: "2-digit",
    month: type === "long" ? "long" : "2-digit",
    year: "numeric"
  };
  let dateValue = date.toLocaleDateString("en-US", options);
  return `${dateValue}`;
};

export default formatDate;

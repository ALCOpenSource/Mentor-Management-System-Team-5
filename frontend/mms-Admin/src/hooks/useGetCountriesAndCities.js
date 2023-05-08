import { useState, useEffect } from "react";

const useGetCountriesAndCities = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        const { data } = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default useGetCountriesAndCities;

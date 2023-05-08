import { useState, useEffect } from "react";

const useGetCountriesAndCities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        const { data } = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default useGetCountriesAndCities;

import { useState, useEffect } from "react";

const useGetCitiesOfACountry = (country) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const result = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ country: country })
        });
        const { data } = await result.json();
        setCities(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCities();
  }, [country]);

  return cities;
};

export default useGetCitiesOfACountry;

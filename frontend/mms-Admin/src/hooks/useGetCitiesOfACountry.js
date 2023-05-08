import { useState, useEffect } from "react";

const useGetCitiesOfACountry = (country) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCities();
  }, [country]);

  return { cities, loading };
};

export default useGetCitiesOfACountry;

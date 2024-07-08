import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleChange = async () => {
      const url = "http://localhost:5000/api";

      try {
        setIsLoading(true);
        const response = await fetch(
          `${url}/products?term=${searchParams.get("term")}`
        );
        if (!response) {
          throw new Error("The Data That You Are Retriving is Not Available");
        }
        const products = await response.json();
        setQuery(products);
      } catch (error) {
        console.error("Search Error", error);
        setQuery([]);
      }
      setIsLoading(false);
    };
    handleChange();
  }, [query]);

  return <>{isLoading ? <p>Loading...</p> : ""}</>;
}

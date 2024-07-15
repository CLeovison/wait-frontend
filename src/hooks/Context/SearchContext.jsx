import React, { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    const url = "http://localhost:5000";

    try {
      setIsLoading(true);

      const response = await fetch(`${url}`);
      if (!response) {
        throw new Error("No Result Was Found");
      }
      const products = await products.json();
      setResult(products);
    } catch (error) {
      console.error("Search Term:", error);
      setResult([])
    }
  };

  return <></>;
};

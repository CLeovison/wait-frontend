import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [request] = useSearchParams()

  const search = async () => {
    const url = "http://localhost:5000";

    try {
      setIsLoading(true);

      const response = await fetch(
        `${url}/products?productinfo.productname=${request.get("search")}`
      );
      if (!response) {
        throw new Error("No Result Was Found");
      }
      const products = await products.json();
      setResult(products);
    } catch (error) {
      console.error("Search Term:", error);
      setResult([]);
    }
  };

  return (
    <>
      <SearchContext.Provider value={{search, query, result}}>
        {children}
        </SearchContext.Provider>
    </>
  );
};

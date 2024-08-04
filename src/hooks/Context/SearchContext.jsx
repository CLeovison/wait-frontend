import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext("");

export const SearchContextProvider = ({ children }) => {
  // States
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // SearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItem = searchParams.get("search");

  // Provider Value
  const providerValue = {
    result,
    query,
    searchParams,
    selectedItem,
    isLoading,
    setSearch: (term) => setSearchParams({ search: term }),
  };

  // UseEffect
  useEffect(() => {
    if (selectedItem) {
      const search = async () => {
        const url = "http://localhost:5000/api";
        try {
          setIsLoading(true);
          const response = await fetch(
            `${url}/products?productinfo.productname=${selectedItem}`
          );
          if (!response.ok) {
            throw new Error("The product you are retrieving doesn't exist");
          }
          const products = await response.json();
          setResult(products.productPaginated);
        } catch (error) {
          console.error("Search Error:", error);
          setResult([]);
        } finally {
          setIsLoading(false);
        }
      };
      search();
    }
  }, [selectedItem]);

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
};

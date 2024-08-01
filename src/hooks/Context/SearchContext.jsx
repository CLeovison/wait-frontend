import React, { createContext, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext("");

export const SearchContextProvider = ({ children }) => {
  //States
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //SearchParams
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
    product: "",
  });

  //Value
  const selectedItem = searchParams.get("search");
  const selectedProduct = searchParams.get("product");

  
  //Provider Value

  const providerValue = {
    result,
    query,
    searchParams,
    selectedItem,
    isLoading,
  };
  //UseEffect
  useEffect(() => {
    const search = async () => {
      const url = "http://localhost:5000/api";

      try {
        setIsLoading(true);
        const response = await fetch(
          `${url}/products/search?term=${selectedItem}`
        );
        if (!response) {
          throw new Error("The product that you are retriving doesn't exist");
        }
        const products = await response.json();
        setResult(products.productPaginated);
      } catch (error) {
        console.error("Search Error:", error);
        setResult([]);
      }
      setIsLoading(false);
    };
    search();
  }, []);
  return (
    <>
      <SearchContext.Provider value={providerValue}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

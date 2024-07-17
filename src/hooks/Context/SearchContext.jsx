import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = async () => {
    const url = "http://localhost:5000";

    try {
      setIsLoading(true);

      const response = await fetch(
        `${url}/products?productinfo.productname=${searchParams.get("search")}`
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
      <SearchContext.Provider
        value={{ search, searchParams, result, isLoading, setSearchParams }}
      >
        {children}
      </SearchContext.Provider>
    </>
  );
};

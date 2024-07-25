import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext("");

export const SearchContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false)


  //UseEffect
  useEffect(() => {
    const search = async () => {
      const url = "http://localhost:5000/api";

      try{
        setIsLoading(true)
        const response = await fetch(`${url}/search/term=${searchParams.get('search')}`)
        if(!response){
          throw new Error("The product that you are retriving doesn't exist")
        }
        const products = await response.json();
        setResult(products.productinfo)
      }catch(error){
        console.error("Search Error:",error)
        setResult([])
      }
      setIsLoading(false)
    };
    search();
  }, []);
  return (
    <>
      <SearchContext.Provider value={{ result, query, searchParams,isLoading }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

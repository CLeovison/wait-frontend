import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState([]);
  const url = "http://localhost:5000/api";
  const [request] = useSearchParams();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${url}/products?products=${request.get("search")}`
        );

        if (!response) {
          throw new Error("The Data That You Are Getting Is Not Available");
        }
        const products = await response.json();
        setQuery(products.productPaginated);
        console.log(products.productPaginated);
      } catch (error) {
        console.error("Search Error:", error);
        setQuery([]);
      }
      setIsLoading(false);
    };

    handleSearch();
  }, []);
  return (
    <>
      <h2>search = {request?.get("search")}</h2>
      {isLoading && "Loading-Component"}
      <ul>
        {query?.map((item) => {
          return <li key={item}>item {item}</li>;
        })}
      </ul>
    </>
  );
}

import React from "react";
import SearchResult from "../../components/Search/SearchResult/SearchResult";
import Card from "../../components/Card/Card";
import { useSearch } from "../../hooks/Context/useSearch";

export default function Products() {
  const { result } = useSearch();
  console.log(result);

  return (
    <>
      <SearchResult />
      {result.map((results) => (
        <Card
          key={results._id}
          image={results.image?.filename}
          name={results.productinfo?.productname}
          description={results.productinfo?.description}
        />
      ))} 
    </>
  );
}

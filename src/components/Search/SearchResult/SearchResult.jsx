import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";


export default function SearchResult() {
  const {result, isLoading} = useSearch()
  return (
    <>
     {isLoading ? (<p>Loading...</p>) : (
      <ul>
        {result.map(results =>(
          <li key={results._id}></li>
        ))}
      </ul>
     )}
    </>
  );
}

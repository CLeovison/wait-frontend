import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";


export default function SearchResult() {
  const { query, results, isLoading } = useSearch();
  return (
    <>
      <h1>Search Results for{query}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result._id}>{result.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

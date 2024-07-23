import React from "react";
import { SearchContextProvider } from "../../../hooks/Context/SearchContext";
import { useSearchContext } from "../../../hooks/Context/useSearchContext";



<SearchContextProvider>
  <SearchResult />
</SearchContextProvider>;

export default function SearchResult() {
  const { searchParams, results, isLoading } = useSearchContext()
  return (
    <>
      <h1>Search Results for {searchParams}</h1>
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

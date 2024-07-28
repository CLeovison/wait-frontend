import React from "react";
import { SearchContextProvider } from "../../../hooks/Context/SearchContext";
import { useSearch } from "../../../hooks/Context/useSearch";

<SearchContextProvider>
  <SearchResult />
</SearchContextProvider>;

export default function SearchResult() {
  const { searchParams, isLoading, result } = useSearch();
  return (
    <>
      <h1>Search Results for {searchParams}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>Slap</li>
        </ul>
      )}
    </>
  );
}

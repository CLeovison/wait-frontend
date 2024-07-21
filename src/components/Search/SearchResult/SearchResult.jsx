import React, {useContext} from "react";
import { SearchContext } from "../../../hooks/Context/SearchContext";



export default function SearchResult() {
  
  const { searchParams,results, isLoading } = useContext(SearchContext)
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

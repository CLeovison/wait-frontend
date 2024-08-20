import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";
import Card from "../../Card/Card";

export default function SearchResult() {
  const { isLoading, result } = useSearch();

  return (
    <>
      <section className=" border-zinc-600 bg-red-300">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          result.map((results) => (
            <Card
             className=" flex"
              key={results._id}
              image={`http://localhost:5000/api/uploads/${results.image?.filename}`}
              name={results.productinfo?.productname}
            />
          ))
        )}
      </section>
    </>
  );
}

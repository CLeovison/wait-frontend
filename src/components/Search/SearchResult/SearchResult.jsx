import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";
import Card from "../../Card/Card";

export default function SearchResult() {
  const { isLoading, result } = useSearch();

  return (
    <>
      <section className="grid grid-cols-4 gap-4 w-full">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          result.map((results) => (
            <div key={results._id}>
              <Card
                classNames="flex flex-col items-center"
                image={`http://localhost:5000/api/uploads/${results.image?.filename}`}
                name={results.productinfo?.productname}
              />
            </div>
          ))
        )}
      </section>
    </>
  );
}

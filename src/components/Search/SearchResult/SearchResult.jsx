import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";
import Card from "../../Card/Card";

export default function SearchResult() {
  const { isLoading, result } = useSearch();

  return (
    <>
      <section className=" w-96 flex">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          result.map((results) => {
            return (
              <div className="" key={results._id}>
                <Card
                  classNames="flex flex-col items-center"
                  image={`http://localhost:5000/api/uploads/${results.image?.filename}`}
                  name={results.productinfo?.productname}
                />
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

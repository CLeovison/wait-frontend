import React from "react";
import { useSearch } from "../../hooks/Context/useSearch";

export default function Card() {
  const { result } = useSearch();
  return (
    <>
      <section className=" border-r w-80 p-1">
        <div className="card-image">
          {result.map((data) => (
            <li key={data._id}>
              <h2>{data.productinfo?.productname}</h2>
              <p>{data.productinfo?.productdesc}</p>
              <p>{data.image?.filename}</p>
            </li>
          ))}
        </div>
      </section>
    </>
  );
}

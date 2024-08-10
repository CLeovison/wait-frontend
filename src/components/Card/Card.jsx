import React from "react";
import { useSearch } from "../../hooks/Context/useSearch";

export default function Card({props}) {
  const { result } = useSearch();
  return (
    <>
      <section className=" border-r w-80 p-1">
        <div className="card-image">
          {result.map((images) => (
            <li key={images._id}>
              <img src="" alt="" />
              <h2>{props.productname}</h2>
              <p>{props.productdesc}</p>
            </li>
          ))}
        </div>
      </section>
    </>
  );
}

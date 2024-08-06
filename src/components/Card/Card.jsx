import React from "react";
import { useSearch } from "../../hooks/Context/useSearch";

export default function Card() {
  const { result } = useSearch();
  return (
    <>
      <section className="border-black">
        {result.map(item => <li key={item._id}>
          <h1>{item.productinfo?.productname}</h1>
          <p>{item.productinfo?.description}</p>
        </li>)}
      </section>
    </>
  );
}

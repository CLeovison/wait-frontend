import React from "react";
import { useSearch } from "../../hooks/Context/useSearch";

export default function Card() {
  const { result } = useSearch();
  return (
    <>
      <section className=" border-r w-80 p-1">
        <div className="card-image">
 
        </div>
      </section>
    </>
  );
}

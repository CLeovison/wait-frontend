import React from "react";
import { Link } from "react-router-dom";

export default function Card({ cards }) {
  return (
    <>
      <section>
        <img
          src={`http://localhost:5000/api/uploads/${
            cards.image?.filename || "default.png"
          }`}
          alt={cards.productinfo.productname || "No Image"}
        />
        <p>{cards.productinfo.productname}</p>
        <p>{cards.productinfo.price}</p>
        <Link to="/">Brix</Link>
      </section>
    </>
  );
}

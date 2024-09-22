import React from "react";

export default function Card({ cards }) {
  return (
    <>
      <section>
        <img
          src={`http://localhost:5000/api/uploads/${
            cards.image?.filename || "default.png"
          }`}
          alt={cards.productinfo.productname}
        />
        <p>{cards.productinfo.productname}</p>
      </section>
    </>
  );
}

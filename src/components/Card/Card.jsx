import React from "react";

export default function Card({ name, description }) {
  return (
    <>
      <section className=" border-r w-80 p-1">
        <div className="cards">
          <div className="card-image"></div>
          <div className="card-title">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

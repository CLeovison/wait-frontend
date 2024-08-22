import React from "react";

export default function Card({ name, description, image, classNames }) {
  return (
    <>
      <section className="w-80 p-1">
        <div className={classNames}>
          <div className="card-image">
            <img src={image} alt="" />
          </div>
          <div className="card-title">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

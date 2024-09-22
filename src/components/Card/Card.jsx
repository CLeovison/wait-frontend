import React from "react";
import { Link } from "react-router-dom";
export default function Card({ name, description, image, classNames }) {
  return (
    <>
      <section className="w-80 p-1">
        <div className={classNames}>
          <div className="card-image">
            <img className="w-52" src={image} alt="" />
          </div>
          <div className="card-title">
            <h3>{name}</h3>
            <h2></h2>
            <p>{description}</p>
          </div>
        <Link to="/">Button</Link>
        </div>
      </section>
    </>
  );
}

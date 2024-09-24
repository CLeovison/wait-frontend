import React from "react";
import { Link } from "react-router-dom";

export default function Card({ cards }) {
  return (
    <>
     
        <div className="shit" >
          <div className="card" >
            <img
              className="w-24"
              src={`http://localhost:5000/api/uploads/${
                cards.image?.filename || "default.png"
              }`}
              alt={cards.productinfo.productname || "No Image"}
            />
          </div>
          <div className="products">
            <p>{cards.productinfo.productname}</p>
            <p>{cards.productinfo.price}</p>
          </div>
          <Link to="/">Brix</Link>
        </div>

    </>
  );
}

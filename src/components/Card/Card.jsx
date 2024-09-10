import React from "react";

export default function Card({ products, classNames }) {
  return (
    <>
      <section className="w-80 p-1">
        {products.map(product => {
          <div className={classNames} key={product._id}>
          <div className="card-image">
            <img src={product.productinfo?.image} alt="" />
          </div>
          <div className="card-title">
            <h3>{product.productinfo?.name}</h3>
            <p>{product.productinfo?.description}</p>
          </div>
        </div>
        })}
      </section>
    </>
  );
}

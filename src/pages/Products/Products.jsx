import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllProduct } from "../../services/api/Product/Product";

export default function Products() {
  //States
  const [allProduct, setAllProduct] = useState([]);
  
  useEffect(() => {
    const trialFetch = async () => {
      try {
        const response = await getAllProduct();
        setAllProduct(response.productPaginated);
      } catch (error) {
        console.log(error);
      }
    };
    trialFetch();
  }, []);

  return (
    <>
      <section>
        {allProduct.map((products) => (
          <Card cards={products} />
        ))}
      </section>
    </>
  );
}

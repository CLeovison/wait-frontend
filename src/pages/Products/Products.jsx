import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
export default function Products() {
  //States
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      const response = await fetch("http://localhost:5000/api/products");
      if (!response.ok) {
        throw new Error("This is not working");
      }
      const product = await response.json();

      setAllProduct(product.productPaginated);
    };
    getAllProduct();
  }, []);



  return (
    <>
      {allProduct.map((products) => (
        <Card cards={products} />
      ))}
    </>
  );
}

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
        console.log(response);
        
      } catch (error) {
        console.log(error);
      }
    };
    trialFetch();
  }, []);

  console.log(allProduct);
  
  return (
    <>
      <section className="grid grid-cols-4" >
        {allProduct.map((products) => (
          <Card cards={products} key={products._id}/>
        ))}
      </section>
    </>
  );
}

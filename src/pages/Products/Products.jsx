import React, { useState } from "react";

import { getAllProduct } from "../../services/api/Product/product";

export default function Products() {
  const [product, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  

  const fetchProduct = async () =>{
    try{
      const response = await getAllProduct()
      if(!response.ok){
        throw new Error("The Product That You Are Getting is not Available")
      }
      setProducts(response.productPaginated)
    }catch(error){
      console.error(error);
      
    }
  }
  console.log(fetchProduct())
  
  return (
    <>

    </>
  );
}

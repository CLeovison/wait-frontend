import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllProduct } from "../../services/api/Product/Product";

export default function Home() {
  const [collections, setCollections] = useState([])

  useEffect(() =>{
    const fetchCollections = async () =>{
      try{
        const product = await getAllProduct()
        setCollections(product.productPaginated)
        console.log(product);
        
      }catch(error){
        console.log(error);
        
      }
    } 
    fetchCollections()
  },[])

  return <>
      {collections.map(collection =>{
           return <Card cards={collection} key={collection._id}/>
      })}
  </>;
}

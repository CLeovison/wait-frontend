import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Products() {
  let [searchParams] = useSearchParams();
  const [result, setResult] = useState({});

  useEffect(()=>{
    console.log("useeffect")
    const getResult = async () => {
      await fetch("http://localhost:5000/api/products?"+searchParams.toString())
        .then(res => res.json())
        .then(res => setResult(res))
    }
    getResult()
  }, [searchParams])

  console.log("render")
  return (
    <>
      <h1>All Products - {searchParams.toString()} </h1>
      {result?.productPaginated?.map((results) => (
        <Card
          key={results._id}
          image={`http://localhost:5000/api/uploads/${results.image?.filename}`}
          name={results.productinfo?.productname}
          description={results.productinfo?.description}
        />
      ))}
    </>
  );
}

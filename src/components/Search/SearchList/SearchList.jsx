import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";

export default function SearchList() {
  const { result } = useSearch();
  return(

    <>
    {result.map(results =>{
        <div className=" " key={results._id}>
            <p>{results.productinfo.productname}</p>
        </div>
    })}
    
    </>
  );
}

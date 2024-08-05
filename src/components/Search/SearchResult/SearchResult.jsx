import React from "react";
import { useSearch } from "../../../hooks/Context/useSearch";

export default function SearchResult() {
  const { isLoading, result } = useSearch();

  console.log(result);
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <ul className="qwqw">
          {result.map((item) => (
            <li key={item._id} className=" to-black">
             {item.productinfo?.productname}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

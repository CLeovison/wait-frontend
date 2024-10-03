import React from "react";
import Spinner from "../../ui/Spinner/Spinner";
import { useSearch } from "../../../hooks/Context/useSearch";

export default function SearchList({ results }) {
  const { isLoading, setLoading } = useSearch();

  return (
    <>
      {results.length > 0 ? (
        <div className="absolute flex flex-col bg-slate-400 w-60 mt-2 rounded-lg max-h-100">
          {results.slice(0, 5).map((list) => (
            <div
              className="flex items-center justify-between pb-4 hover:bg-gray-600 border-1 rounded-lg pt-2 m-1"
              key={list._id}
            >
              <p className="pl-2">
                {list.productinfo?.productname || "Unnamed Product"}
              </p>
              <img
                src={`http://localhost:5000/api/uploads/${
                  list.image?.filename || "default.png"
                }`}
                alt={list.productinfo?.productname || "No Image"}
                className="mr-1 mt-1 w-12 rounded-lg"
              />

            </div>
          ))}

          {!isLoading && <Spinner/>}
        </div>
      ) : (
        <p className=" pt-2 text-center absolute flex items-center flex-col bg-slate-400 w-60 mt-1 rounded-lg max-h-10 h-12">
          No recent search
        </p>
      )}
      ;
    </>
  );
}

import React from "react";

export default function SearchList({ results }) {
  return (
    <>
      <div className="absolute flex flex-col bg-slate-400 w-60 mt-2 rounded-lg overflow-y-scroll max-h-80">
        <div className="flex-col">
          {results.map((list) => {
            return (
              <div className=" flex items-center justify-between" key={list._id}>
                <p>{list.productinfo.productname}</p>
                <img src={`http://localhost:5000/api/uploads/${list.image?.filename}`} alt="" className=" w-28"/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

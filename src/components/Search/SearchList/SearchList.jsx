import React from "react";


export default function SearchList({ results }) {
  return (
    <>
      <div className="absolute flex flex-col bg-slate-400 w-60 mt-2 rounded-lg max-h-100">
        <div className="flex-col">
          {
            results.slice(0, 5).map((list) => {
              return (
                <div
                  className=" flex items-center justify-between pb-4 hover:bg-gray-600 border-1 rounded-lg pt-2 m-1"
                  key={list._id}
                >
                  <p className="pl-2">{list.productinfo?.productname}</p>
                  <img
                    src={`http://localhost:5000/api/uploads/${list.image?.filename}`}
                    alt=""
                    className=" mr-1 mt-1 w-12 rounded-lg"
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

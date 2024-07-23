
import React from "react";
import { Link } from "react-router-dom";


export default function ErrorMessage() {
  return (
    <>
      <section className="text-center">
        <div className="pb-11">
          <h1>Page Not Found. Our apologies. There has been an error.</h1>

          <p>The Page that you are looking cannot be found</p>
          <p>Please make sure to provide a correct URL</p>
          
        </div>
        <Link to="/" className="">Home</Link>
      </section>
    </>
  );
}

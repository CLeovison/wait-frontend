import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
     <h1>Home Page</h1>
     <ul>
        <li><Link to="/item/1">Item 1</Link></li>
        <li><Link to="/item/2">Item 2</Link></li>
        <li><Link to="/item/special">Special Item</Link></li>
      </ul>
    </>
  );
}

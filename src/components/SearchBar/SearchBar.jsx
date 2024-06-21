import React, { useState } from "react";

export default function SearchBar() {
  const [checked, setChecked] = useState(false);

 const handleChange = () =>{
 
        setChecked(!checked)
 }
console.log(checked);
  return (
    <>
      <form className="flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="checkbox"></label>
        <input type="search" name="" id="" className="outline-none text-slate-700"/>
      </form>
    </>
  );
}

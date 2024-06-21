import React, { useState } from "react";

export default function SearchBar() {
  const [checked, setChecked] = useState(false);

 const handleChange = () =>{
        setChecked(!checked)
 }
console.log(checked);
  return (
    <>
      <form >
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor="checkbox"></label>
      </form>
    </>
  );
}

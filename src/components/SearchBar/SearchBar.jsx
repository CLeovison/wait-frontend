import React, { useState } from "react";

export default function SearchBar() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    console.log("clicked");
    setChecked(prev => !prev);
  };
  return (
    <>
      <form className="flex items-center">
        <label htmlFor="search-checkbox">{checked? 'true':'false'}</label>
        <input
          type="checkbox"
          id="search-checkbox"
          checked={checked}
          onClick={handleChange}
        />

        <label htmlFor="search">
          <input
            type="search"
            id="search"
            name=""
            className="outline-none text-slate-700"
          />
        </label>
      </form>
    </>
  );
}

import React, { useState } from "react";

export default function SearchBar() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  console.log(checked);
  return (
    <>
      <form className="flex items-center">
        {!checked ? (
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </label>
        ) : (
          <label htmlFor="search">
            <input
            type="search"
            id="search"
            name=""
            className="outline-none text-slate-700"
          />
          </label>
          
        )}
      </form>
    </>
  );
}

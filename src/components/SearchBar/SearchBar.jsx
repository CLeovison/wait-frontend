import React, { useRef, useState } from "react";
import { Search } from "lucide-react";


export default function SearchBar() {
  const [isChecked, setIsChecked] = useState(false);
  const htmlSearchField = useRef(null)
  
  //Fetching Data From Backend
  const [result, setResult] = useState('')
  const [query, setQuery] = useState([])
  
  const handleIcon = (e) => {
    e.preventDefault()
    if (isChecked && htmlSearchField.current.value.length > 0) {
      // do search
      e.target.closest('form').requestSubmit(e.currentTarget)
    }
    setIsChecked((prev) => !prev);
  };

  const handleSearch = async (event) =>{
      const value = event.target.value
      setQuery(value)

      if(value.length > 2){
        try{
          const url = await fetch(`http://localhost:5000/products?products=${value}`)
          setResult(url.data)
        }catch(error){
          console.error("Search error: ",error)
          setResult([])
        }
      }
  }

  return (
    <>
      <form className="flex items-center" method="get" action={handleSearch}>
        {isChecked && (
          <input
            type="search"
            id="search-checkbox"
            name="search"
            className="text-black p-1"
            ref={htmlSearchField}
            defaultValue={result}
          />
          
        )}
        <button type="submit" onClick={handleIcon}>
          <Search className="cursor-pointer"/>
        </button>
      </form>
      
    </>
  );
}

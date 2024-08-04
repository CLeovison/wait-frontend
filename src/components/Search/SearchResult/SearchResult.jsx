import React from 'react'
import { useSearch } from '../../../hooks/Context/useSearch'

import { Link } from 'react-router-dom'
export default function SearchResult() {
  const {isLoading } = useSearch()
  return (
    <>

  

      {isLoading ? <p>Loading....</p> :   <ul>
        <li><Link to="/item/1">Item 1</Link></li>
        <li><Link to="/item/2">Item 2</Link></li>
        <li><Link to="/item/special">Special Item</Link></li>
      </ul>}
    </>
  )
}

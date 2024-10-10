import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
  const location = useLocation()
  console.log(location);
  
  return (
    <>
    <ul>
      <Link to={"/"}></Link>
      <Link to={"/products"}></Link>
    </ul>
    
    </>
  )
}

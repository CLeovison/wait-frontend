import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrump() {
  const location = useLocation()
  return (
    <>
    <ul>
      <Link to={"/"}></Link>
      <Link to={"/products"}></Link>
    </ul>
    
    </>
  )
}

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
  const location = useLocation()
  console.log(location);
  
  return (
    <>
    <h1>BreadCrumbs</h1>
    
    </>
  )
}

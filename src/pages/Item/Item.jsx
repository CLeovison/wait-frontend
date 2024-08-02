import React from 'react'
import { useParams } from 'react-router-dom';
export default function Item() {
    const { id } = useParams();
    return (
      <>
      {id === 'special' ? (<h1>Items</h1>) : <h1>Item Id: {id}</h1>}
      
      </>
    )
}

import React from 'react'

import { Link } from 'react-router-dom'
export default function Footer() {
  return (
        <>
        <div className=" mt-80 pt-14 flex justify-evenly items-center border-t-2 border-t-zinc-100">
          <Link to="https://www.facebook.com/waitclothing">Facebook</Link>
          <Link to="https://www.instagram.com/waitclothing">Instagram</Link>
        </div>
        </>
  )
}

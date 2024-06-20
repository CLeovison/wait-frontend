import React from 'react'
import { Link } from 'react-router-dom'

export default function Sider() {
  return (
    <>
        <aside className='bg-slate-900 w-56 '>
        <div className="logo">
                <img src="/src/assets/logo/wait.png" alt=""  className='w-28'/>
            </div>
            <ul className=''>
                <li><Link to='/' className='text-white'>Home</Link></li>
                <li><Link to="/products" className='text-white'>Products</Link></li>
                <li><Link to="/about" className='text-white'>About</Link></li>
                <li><Link to="/contact" className='text-white'>Contact Us</Link></li>
            </ul>
            
        </aside>
    </>
  )
}

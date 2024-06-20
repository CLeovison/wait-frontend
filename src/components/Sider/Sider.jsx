import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Shirt } from 'lucide-react'
import { UsersRound } from 'lucide-react'
import { SquareUser } from 'lucide-react'
export default function Sider() {
  return (
    <>
        <aside className='bg-zinc-700 w-56 '>
        <div className="logo">
                <img src="/src/assets/logo/wait.png" alt=""  className='w-28'/>
            </div>
            <ul className='px-3.5'>
                <li className="list-none p-4"><Link to='/' className='text-white flex flex-row '><Home/> Home</Link></li>
                <li className="list-none flex p-4"><Link to="/products" className='text-white flex flex-row '><Shirt />Products</Link></li>
                <li className="list-none p-4"><Link to="/about" className='text-white flex flex-row '><UsersRound />About</Link></li>
                <li className="list-none p-4"><Link to="/contact" className='text-white flex flex-row '><SquareUser />Contact</Link></li>
            </ul>
            
        </aside>
    </>
  )
}

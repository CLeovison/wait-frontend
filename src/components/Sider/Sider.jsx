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
                <Link><img src="/src/assets/logo/wait.png" alt=""  className='w-28 ml-3 mt-1 mb-3'/></Link>      
        </div>
            <ul className='px-3.5 list-none'>
                <li className="p-4"><Link to='/' className='text-white flex flex-row items-center '><Home className="mr-2.5"/> Home</Link></li>
                <li className="p-4"><Link to="/products" className='text-white flex flex-row items-center '><Shirt className="mr-2.5"/>Products</Link></li>
                <li className="p-4"><Link to="/about" className='text-white flex flex-row items-center'><UsersRound className="mr-2.5"/>About</Link></li>
                <li className="p-4"><Link to="/contact" className='text-white flex flex-row items-center'><SquareUser className="mr-2.5"/>Contact</Link></li>
            </ul>
        <footer>
         
        </footer>    
        </aside>
        
    </>
  )
}

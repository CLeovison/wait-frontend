import React from 'react'
import { Link } from 'react-router-dom'

//Icons
import { Search } from 'lucide-react'
import { UserRound } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import SearchBar from '../SearchBar/SearchBar'
export default function Header() {
  return (
    <>
        <nav className='bg-zinc-700 h-20 flex flex-row gap-2 justify-end items-center'>
        
            <ul className='flex flex-row '>
                <li className='p-4 text-white'><Link ><Search/><SearchBar/></Link></li>
                <li className='p-4 text-white'><Link><ShoppingCart /></Link></li>
                <li className='p-4 text-white'><Link><UserRound /></Link></li>
            </ul>
        </nav>
    </>
  )
}

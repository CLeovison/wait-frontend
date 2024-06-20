import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <nav className='bg-zinc-700 h-20 flex flex-row gap-2 justify-end items-center'>
        
            <ul className='flex flex-row '>
                <li className='p-4 text-white'><Link >Icon</Link></li>
                <li className='p-4 text-white'><Link>Icon1</Link></li>
                <li className='p-4 text-white'><Link>Icon2</Link></li>
                <li className='p-4 text-white'><Link>Icon3</Link></li>
            </ul>
        </nav>
    </>
  )
}

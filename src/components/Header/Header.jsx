import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <nav className='bg-slate-900 h-20 flex flex-row gap-2 justify-end items-center'>
        
            <ul className='flex flex-row'>
                <li className='p-30 '><Link >Icon</Link></li>
                <li><Link>Icon1</Link></li>
                <li><Link>Icon2</Link></li>
                <li><Link>Icon3</Link></li>
            </ul>
        </nav>
    </>
  )
}

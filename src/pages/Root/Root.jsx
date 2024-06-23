import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Sider from '../../components/Sider/Sider'
export default function Root() {
  return (
    <div className='grid grid-cols-[min-content,1fr] h-screen md:grid-cols-[1fr] '>
    <Sider/>
    <div>
    <Header/>
    <Outlet/>
    </div>
    
    </div>
  )
}

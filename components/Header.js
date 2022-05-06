import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import HeaderItem from './HeaderItem'

function Header() {
  const [show,setShow] = useState(false)

  const showNav = () => {
    setShow(!show)
  }
  return (
    <>
    <div className='flex justify-between container mx-auto py-4 px-4 md:py-2 font-poppins text-xl text-gray-200 '>
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-600">OTTO PROGRAMMER</h2>
        <div className="hidden md:flex gap-4 ">
            <HeaderItem url={`home`} title="Home" />
            <HeaderItem url={`home`} title="About" />
            <HeaderItem url={`home`} title="Projects" />
            <div className=" border-2 rounded-md bg-green-900 hover:bg-green-700">
            <HeaderItem url={`home`} title="Contact" /></div>

        </div>
        <div className="cursor-pointer md:hidden animate-bounce" onClick={showNav}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg>
        </div>
        
    </div>
    <div className={`${show ? 'inline' : 'hidden'} z-100 absolute top-18 w-1/2 h-60 bg-gray-900 md:hidden overflow-hidden text-gray-300 flex flex-col gap-6 p-4`} >
      <div>Home</div>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
      </div></>
  )
}

export default Header
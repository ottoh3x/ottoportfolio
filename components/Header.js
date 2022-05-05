import Link from 'next/link'
import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <div className='flex justify-between container mx-auto py-4 px-4 md:py-2 font-poppins text-xl text-gray-200 '>
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-600">OTTO PROGRAMMER</h2>
        <div className="hidden md:flex gap-4 ">
            <HeaderItem url={`home`} title="Home" />
            <HeaderItem url={`home`} title="About" />
            <HeaderItem url={`home`} title="Projects" />
            <div className=" border-2 rounded-t-lg bg-green-900 hover:bg-green-700">
            <HeaderItem url={`home`} title="Contact" /></div>

        </div>
        <div className="cursor-pointer md:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg>
        </div>
    </div>
  )
}

export default Header
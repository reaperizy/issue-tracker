'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaBug } from "react-icons/fa";

const NavBar = () => {

const currentPath = usePathname()
console.log(currentPath)

const links = [
    { label : 'Dashboard', href: '/'},
    { label : 'Issues', href: '/issues'},
]


  return (
     <nav className='flex space-x-6 border-b px-5 mb-5 h-14 items-center'>
        <Link href='/'><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map((link) => (
                <Link 
                key={link.href} 
                className='text-zinc-500 hover:text-zinc-800 transition-color' 
                href={link.href}>{link.label}</Link>
            ))}
            <li></li>
            <li></li>
        </ul>
     </nav>
    )
}

export default NavBar


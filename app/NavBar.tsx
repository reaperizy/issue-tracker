'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from "react-icons/fa";
import classnames from 'classnames'

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
                
                //menggunakan classnames
                //fungsi classnames dibawah untuk menentukan warna link yang sedang aktif
                //dan juga menyetel agar selalu dirender dengan 'true'
                className={classnames({
                    'text-zinc-900' : link.href === currentPath,
                    'text-zinc-500' : link.href !== currentPath,
                    'hover:text-zinc-800 transition-color' : true
                })} 
                href={link.href}>{link.label}</Link>
            ))}
            <li></li>
            <li></li>
        </ul>
     </nav>
    )
}

export default NavBar


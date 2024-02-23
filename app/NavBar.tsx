import React from 'react'
import Link from 'next/link'

import { FaBug } from "react-icons/fa";

const NavBar = () => {
  return (
     <nav className='flex space-x-6 border-b px-5 mb-5 h-14 items-center'>
        <Link href='/'><FaBug /></Link>
        <ul className='flex space-x-6'>
            <li><Link href='/dashboard'>Dashboard</Link></li>
            <li><Link href='/issues'>Issues</Link></li>
        </ul>
     </nav>
    )
}

export default NavBar


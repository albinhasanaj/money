import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mt-2'>
        <ul className='flex gap-6 text-[20px] text-black'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/learn'>Learn</Link></li>
            <li><Link href='/paths'>Paths</Link></li>
            <li><Link href='/review'>Review</Link></li>
            <li><Link href='/publish'>Publish</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
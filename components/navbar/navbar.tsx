import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center p-6 container'>
            <Link href='/' className='text-[25px] font-bold'>Women Helpline</Link>

            <ul className='flex gap-4 text-[1.2rem] text-md'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/create-job'>Add Numbers</Link></li>
            </ul>

        </div>

    </nav>
  )
}

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between h-16 px-5 items-center'>
      <Link href = "/"><div className="font-bold cursor-pointer text-lg">GetMeAChai</div></Link>
      {/* <ul className='flex gap-7'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Sign Up</li>
        <li className='cursor-pointer'>Login</li>
      </ul> */}
      <div>
        <Link href="/login">
          <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

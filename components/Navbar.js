import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between h-12 px-5 items-center'>
      <div className="font-bold cursor-pointer text-lg">GetMeAChai</div>
      <ul className='flex gap-7'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Sign Up</li>
        <li className='cursor-pointer'>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar

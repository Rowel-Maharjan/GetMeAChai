import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white flex justify-between px-10 items-center'>
      <div className='flex flex-col my-5'>
        <div>Copyright&copy; Get Me A Chai - All rights reserved!</div>
        <div className='text-gray-400 text-xs mt-2'>Made by Rowel Maharjan</div>
        <ul className='flex gap-7 mt-5'>
          <li className='hover:underline cursor-pointer'>About Us</li>
          <li className='hover:underline cursor-pointer'>Contact Us</li>
          <li className='hover:underline cursor-pointer'>Privacy Policy</li>
          <li className='hover:underline cursor-pointer'>Legal</li>
          <li className='hover:underline cursor-pointer'>Safety & Privacy Center</li>
          <li className='hover:underline cursor-pointer'>Cookies</li>
        </ul>
      </div>
      <div className='flex flex-col items-center gap-2 my-5 px-8'>
        <div>Follow me on</div>
        <a href="https://github.com/Rowel-Maharjan" target='__blank'>
          <button
            className="flex items-center bg-black border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-[#101113] ">
            <img className="h-6 w-6 mr-2" src="/github.svg" alt="Image Not Found" />
            <span>Github</span>
          </button>
        </a>
      </div>
    </footer>
  )
}

export default Footer

"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  if (session) {
    return (
      <nav className='bg-gray-900 text-white flex justify-between h-16 px-5 items-center'>
        <Link href="/dashboard"><div className="font-bold cursor-pointer text-lg">GetMeAChai</div></Link>
        <div className="relative">
          <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => {
            setTimeout(() => {
              setshowdropdown(false)
            }, 100);
          }} className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center" type="button">Welcome {session.user.email}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div className={`z-10 ${showdropdown ? "" : "hidden"} left-24 absolute top-11 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
            </ul>
          </div>

          <Link href="/login">
            <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" onClick={() => { signOut() }}>Log Out</button>
          </Link>
        </div>
      </nav>
    )
  }
  return (
    <nav className='bg-gray-900 text-white flex justify-between h-16 px-5 items-center'>
      <Link href="/"><div className="font-bold cursor-pointer text-lg">GetMeAChai</div></Link>
      <div>
        <Link href="/login">
          <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

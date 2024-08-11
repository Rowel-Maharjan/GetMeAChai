"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <nav className='bg-gray-900 text-white flex justify-between h-16 px-5 items-center'>
        <Link href="/"><div className="font-bold cursor-pointer text-lg">GetMeAChai</div></Link>
        <div>
          <Link href="/login">
            <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" onClick={()=>{signOut()}}>Log Out</button>
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

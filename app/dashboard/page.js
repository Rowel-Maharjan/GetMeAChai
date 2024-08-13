"use client"

import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const page = () => {

  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session])

  return (
    <div className='flex justify-center'>
      <div className='w-[47%] flex flex-col items-center mb-20'>
        <h1 className='text-3xl major my-5'>Welcome to Your Dashboard</h1>
        <form className='flex flex-col w-full gap-3 text-sm'>
          <div className='flex flex-col gap-1'>
            <span>Name</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <span>Email</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <span>Username</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <span>Profile Picture</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <span>Cover Picture</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <div className='flex flex-col gap-1'>
            <span>Razorpay Credentials</span>
            <input className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>
          <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-3 p-2 my-4 text-center">Save</button>
          1:48:00
        </form>
      </div>
    </div>
  )
}

export default page

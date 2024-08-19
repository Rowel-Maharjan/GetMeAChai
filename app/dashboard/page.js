"use client"

import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {

  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session, router])

  const [form, setform] = useState({})


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const saveInfo = () => {
    console.log(form)
  }

  return (
    <div className='flex justify-center'>
      <div className='w-[47%] flex flex-col items-center mb-20'>
        <h1 className='text-3xl major my-5'>Welcome to Your Dashboard</h1>
        <form className='flex flex-col w-full gap-3 text-sm text-white'>

          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input name='name' id='name' value={form.name ? form.name : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input name='email' id='email' value={form.email ? form.email : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="email" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="username">Username</label>
            <input name='username' id='username' value={form.username ? form.username : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="profile">Profile Picture</label>
            <input name='profile' id='profile' value={form.profile ? form.profile : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="cover">Cover Picture</label>
            <input name='cover' id='cover' value={form.cover ? form.cover : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="rapID">Razorpay ID</label>
            <input name='rapID' id='rapID' value={form.rapID ? form.rapID : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="razSecret">Razorpay Secret</label>
            <input name='razSecret' id='razSecret' value={form.razSecret ? form.razSecret : ""} onChange={handleChange} className='w-full bg-slate-800 rounded-lg p-1 px-3 outline-none' type="text" />
          </div>

          <button onClick={saveInfo} type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-3 p-2 my-4 text-center">Save</button>
        </form>
      </div>
    </div>
  )
}

export default page

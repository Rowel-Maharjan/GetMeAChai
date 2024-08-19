"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Username = ({ params }) => {
  const { data: session } = useSession()
  const router = useRouter()
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/login")
  //   }
  // }, [session])
  return (
    <>
      <div className='flex items-center flex-col'>
        <div className='relative w-full'>
          <img className='w-full' src="/cover.gif" alt="Image Not Found" />
          <div className='absolute -bottom-16 left-[45%] rounded-lg border border-white w-32 h-32'>
            <img className='rounded-lg w-full h-full object-cover ' src="/profile.jpg" alt="Image Not Found" />
          </div>
        </div>
        <div className='flex flex-col items-center my-20 gap-1'>
          <div className='font-bold text-3xl'>@Rowel Maharjan</div>
          <div className='text-[12px] text-slate-300'>Creating Animated art for VTT's</div>
          <div className='text-slate-200'>13,010 members 87 posts $16,900/release</div>
        </div>

        <div className='flex w-[80%] gap-3 mb-10 h-[65vh]'>
          <div className='bg-slate-900 w-1/2 rounded-xl py-7 px-2 overflow-auto'>
            <h1 className='font-bold text-3xl mb-5 major px-10'>Supporters</h1>
            <ul className='flex flex-col gap-3 text-lg text-slate-300'>
              <li className='flex items-center gap-3'>
                <img className='w-8 h-8' src="/avatar.gif" alt="Image not found" />
                <span><span className='font-bold text-white'>Ram</span> donated <span className='text-white font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              
              <li className='flex items-center gap-3'>
                <img className='w-8 h-8' src="/avatar.gif" alt="Image not found" />
                <span><span className='font-bold text-white'>Ram</span> donated <span className='text-white font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              
              <li className='flex items-center gap-3'>
                <img className='w-8 h-8' src="/avatar.gif" alt="Image not found" />
                <span><span className='font-bold text-white'>Ram</span> donated <span className='text-white font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              
              <li className='flex items-center gap-3'>
                <img className='w-8 h-8' src="/avatar.gif" alt="Image not found" />
                <span><span className='font-bold text-white'>Ram</span> donated <span className='text-white font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              

            </ul>
          </div>
          <div className='bg-slate-900 w-1/2 rounded-xl py-7 px-12'>
            <h1 className='font-bold text-3xl mb-5 major'>Payments</h1>
            <div className="flex gap-2 flex-col">
              <input className='w-full bg-slate-800 rounded-lg p-2 px-3 outline-none' placeholder='Enter Name' type="text" />
              <input className='w-full bg-slate-800 rounded-lg p-2 px-3 outline-none' placeholder='Enter Amount' type="text" />
              <input className='w-full bg-slate-800 rounded-lg p-2 px-3 outline-none' placeholder='Enter Message' type="text" />
              <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Pay</button>
            </div>
            <div className="flex gap-2 mt-4">
              <button className='bg-slate-800 rounded-lg p-2 px-3'>Pay $10</button>
              <button className='bg-slate-800 rounded-lg p-2 px-3'>Pay $50</button>
              <button className='bg-slate-800 rounded-lg p-2 px-3'>Pay $100</button>
              <button className='bg-slate-800 rounded-lg p-2 px-3'>Pay $1000</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username

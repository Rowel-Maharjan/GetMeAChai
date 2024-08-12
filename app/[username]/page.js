"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Username = ({params}) => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session])
  return (
    <>
      <div className='relative'>
        <img className='w-full' src="/cover.gif" alt="Image Not Found" />
        <div className='absolute -bottom-16 left-[45%] rounded-lg border border-white w-32 h-32'>
          <img className='rounded-lg w-full h-full object-cover' src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="Image Not Found" />
        </div>
      </div>
      <div className='flex flex-col items-center my-20 gap-1'>
        <div className='font-bold text-3xl'>@Rowel Maharjan</div>
        <div className='text-[12px] text-slate-300'>Creating Animated art for VTT's</div>
        <div className='text-slate-200'>13,010 members 87 posts $16,900/release</div>
      </div>
      1:30:00
    </>
  )
}

export default Username

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center h-[92vh] items-center flex-col gap-7">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-7xl font-bold major flex items-center gap-5">Buy Me A Chai<span><Image width={64} height={64} className='h-16 w-16' src="/tea.gif" alt="Tea Not Found" /></span></div>
                    <div className="text-xl minor">A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</div>
                </div>
                <div className="flex gap-3">
                    <Link href="/login"><button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
                    <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
                </div>
            </div>
            <div className='h-0.5 bg-white opacity-25'></div>
            <div className='flex flex-col justify-center h-[72vh] gap-10'>
                <h1 className='text-3xl major text-center font-bold'>Your Fans Can Buy You A Chai</h1>
                <div className='flex justify-around'>
                    <div className='flex flex-col items-center gap-3'>
                        <Image width={128} height={128} className=' bg-slate-400 rounded-full p-3 h-32 w-32' src="/dollar.gif" alt="Image Not Found" />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-bold text-2xl'>Fund Yourself</p>
                            <p>Personal Contribution towards your goal.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Image width={128} height={128} className=' bg-slate-400 rounded-full p-3 h-32 w-32' src="/target.gif" alt="Image Not Found" />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-bold text-2xl'>Set Clear Goals</p>
                            <p>Define your fundraising target.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Image width={128} height={128} className=' bg-slate-400 rounded-full p-3 h-32 w-32' src="/goal.gif" alt="Image Not Found" />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-bold text-2xl'>Track Progress</p>
                            <p>Monitor funds and milestones easily.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-0.5 bg-white opacity-25'></div>

            <div className='flex flex-col justify-center h-[73vh] gap-10 px-36'>
                <h2 className='text-3xl major text-center font-bold'>Learn More About Us</h2>
                <div className='flex flex-col gap-5 text-xl'>
                    <p className='text-center'>Welcome to GetMeAChai, your go-to platform for raising funds and supporting dreams. Easily fund personal projects, help friends reach their goals, and track progress with secure and user-friendly tools.</p>

                    <p className='text-center'>Set clear goals and share your story to engage your community. Define your fundraising targets, connect with supporters through compelling narratives, and inspire them to contribute to your cause.</p>

                    <p className='text-center'>Celebrate milestones and offer rewards to incentivize donations. Track campaign progress, thank your supporters, and encourage generosity by providing meaningful rewards for contributions.</p>
                </div>
            </div>
            48min
        </>
    )
}

export default Homepage

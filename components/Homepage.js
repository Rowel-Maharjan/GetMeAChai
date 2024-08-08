import React from 'react'

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center h-[92vh] items-center flex-col gap-7">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-7xl font-bold major flex items-center gap-5">Buy Me A Chai<span><img className='w-16' src="/tea.gif" alt="Tea Not Found" /></span></div>
                    <div className="text-xl minor">A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</div>
                </div>
                <div className="flex gap-3">
                    <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
                    <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
                </div>
            </div>
            <div className='h-0.5 bg-white opacity-25'></div>
            <div className='flex flex-col justify-center h-96 gap-10'>
                <h1 className='text-3xl major text-center font-bold'>Your Fans Can Buy You A Chai</h1>
                <div className='flex justify-around'>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='relative bg-slate-400 rounded-full p-3 h-32 w-32'>
                            <img className='absolute top-4 right-6 w-20' src="/tea.gif" alt="Image Not Found" />
                        </div>
                        <p className='font-bold text-2xl'>Fund Yourself</p>
                        <p>Personal Contribution towards your goal.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='relative bg-slate-400 rounded-full p-3 h-32 w-32'>
                            <img className='absolute top-4 right-6 w-20' src="/tea.gif" alt="Image Not Found" />
                        </div>
                        <p className='font-bold text-2xl'>Fund Yourself</p>
                        <p>Personal Contribution towards your goal.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='relative bg-slate-400 rounded-full p-3 h-32 w-32'>
                            <img className='absolute top-4 right-6 w-20' src="/tea.gif" alt="Image Not Found" />
                        </div>
                        <p className='font-bold text-2xl'>Fund Yourself</p>
                        <p>Personal Contribution towards your goal.</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Homepage

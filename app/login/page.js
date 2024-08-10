import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen flex flex-col items-center '>
            <h1 className='text-4xl font-bold pt-16 pb-10 major'>Login to get Started</h1>
            <div className='flex flex-col'>
                <div className="flex flex-col gap-2 w-80">
                    <button
                        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 ">
                        <img className='h-6 w-6 mr-2' src="/google.svg" alt="Image Not Found" />
                        <span>Continue with Google</span>
                    </button>

                    <button
                        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 ">
                        <img className="h-6 w-6 mr-2" src="/github.svg" alt="Image Not Found" />
                        <span>Continue with Github</span>
                    </button>

                    <button
                        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 ">
                        <img className="h-6 w-6 mr-2" src="/facebook.svg" alt="Image Not Found" />
                        <span>Continue with Facebook</span>
                    </button>

                    <button
                        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 ">
                        <img className="h-6 w-6 mr-2" src="/twitter.svg" alt="Image Not Found" />
                        <span>Continue with Twitter</span>
                    </button>

                    <button
                        className="flex items-center pointer-events-none bg-gray-400 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800">
                        <img className="h-6 w-6 mr-2" src="/linkedin.svg" alt="Image Not Found" />
                        <span>Continue with LinkedIn</span>
                    </button>

                    <button
                        className="flex items-center pointer-events-none bg-gray-400 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 ">
                        <img className="h-6 w-6 mr-2" src="/apple.svg" alt="Image Not Found" />
                        <span>Continue with Apple</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
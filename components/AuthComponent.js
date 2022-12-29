import React from 'react'
import ChatGrid from './ChatGrid'

function AuthComponent({ username }) {
    return (
        <div className='text-white flex w-[90%] mx-auto border border-white rounded p-0 flex-col'>
            <div className='border-b border-white p-4 w-full flex justify-between items-center'>
                <div className=''>
                    <p className=''> Hello {username}</p>
                </div>


                <div className='flex items-center gap-4 cursor-pointer'>
                    <p className=''>Inbox</p>
                    <p className=''>Settings</p>
                    <p className=''>Leave</p>
                </div>
            </div>
            <div className='border-b border-white p-4 w-full flex justify-between items-center'>
                <button class="border-red-700 border-2 hover:bg-purple-700 text-white font-light text-xs py-1.5 px-4 rounded-md">
                    STATUS: DISCONNECTED
                </button>


                <div className=''>
                    <button class="border-neutral-700 border-2 hover:border-purple-700 text-white font-normal text-base py-1.5 px-4 rounded-md">
                        Next
                    </button>
                </div>
            </div>


            <ChatGrid />



        </div>
    )
}

export default AuthComponent
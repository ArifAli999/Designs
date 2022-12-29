import React from 'react'

function ChatComp() {
    return (
        <div className='flex flex-col gap-6 w-full md:p-8 p-4'>
            <div className=''>
                chat box
            </div>

            <div className='flex items-center w-full gap-4 '>
                <div className='flex-1'>
                    <textarea className='w-[100%]  bg-transparent border border-neutral-500  rounded focus:border-purple-500 focus:ring-1  focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       focus:outline-none p-2'></textarea>
                </div>

                <div className=''>
                    <button className='px-6 py-4 w-full h-full border border-white text-white cursor-pointer rounded-full'>&gt;</button>
                </div>

            </div>
        </div>
    )
}

export default ChatComp
import React from 'react'
import useAuthStore from '../../store/authStore'

function ChatHeader({ room }) {



    const { userProfile } = useAuthStore()
    return (
        <div className=''>
            <nav class="  px-2 sm:px-2 py-2.5  bg-transparent border-b border-slate-600 ">
                <div class="container flex flex-wrap items-center justify-between mx-auto">

                    <div class="flex md:order-2 relative gap-4">


                        <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium  px-2.5 py-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            STATUS: {room ? 'CONNECTED' : 'DISCONNECTED'}
                        </span>


                    </div>




                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

                        <p className='text-md text-white font-semibold'>

                            {room && room.roomid} - {room && room.status}  to - {room && room.user1 === userProfile.name ? room && room.user2 : room && room.user1}
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ChatHeader
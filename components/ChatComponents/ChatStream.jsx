import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase.config'
import { useQuery } from 'react-query'

function ChatStream({ messages }) {










    return (
        <div className='w-full flex-col gap-4 mt-4 flex  max-h-[600px]  overflow-auto sm:max-h-[650px]  scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-600 px-4 scrollbar-rounded-md ' >


            {messages && messages.map((m) => (
                <div className='text-white flex-1 bg-slate-700 w-full h-full p-4 rounded '>
                    <div class="flex items-center space-x-4">
                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class="font-medium dark:text-white">
                            <div className='' key={m.messsageId}>{m.sentBy}: {m.content}</div>
                        </div>
                    </div>
                </div>


            ))}






        </div>
    )
}

export default ChatStream
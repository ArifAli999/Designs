import React from 'react'
import MessageStream from './MessageStream'
import ChatComp from './ChatComp'

function ChatGrid() {
    return (
        <div className='grid md:grid-cols-1 w-full h-full'>



            <ChatComp />

        </div>
    )
}

export default ChatGrid
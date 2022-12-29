import React, { useState } from 'react'
import GuestComponent from '../components/GuestComponent'
import AuthComponent from '../components/AuthComponent';

function Home() {

    const [username, setUsername] = useState('');
    const [auth, setAuth] = useState(false)


    return (
        <div className='bg-black min-h-scren w-full h-full '>
            <h2 className='text-purple-600 text-xl font-semibold p-4'>Anon Chat</h2>



            {auth ? <AuthComponent username={username} /> : <GuestComponent username={username} setUsername={setUsername} setAuth={setAuth} />}

        </div>
    )
}

export default Home
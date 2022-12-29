import React from 'react'

function GuestComponent({ username, setUsername, setAuth }) {


    function handleSubmit() {

        if (!username) {
            alert('Please enter a username')
        }

        setAuth(true);

    }
    return (
        <div className='w-full h-full flex items-center justify-center gap-4'>

            <input className='bg-transparent border border-white p-2 text-white rounded-md w-[30%] placeholder:italic placeholder:text-slate-200' type='text'
                placeholder='Please enter a username to begin'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <button className='border border-purple-800 rounded-md bg-purple-500 text-white font-bold p-2 px-6'
                onClick={() => handleSubmit()}>Start</button>
        </div>
    )
}

export default GuestComponent
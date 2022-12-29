import React, { useState } from 'react'
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/firebase.config'
import { v4 as uuidv4 } from 'uuid';
import useAuthStore from '../store/authStore';



function GuestComponent() {
    const [username, setUsername] = useState('');

    const { addUser } = useAuthStore();

    function handleSubmit() {

        if (!username) {
            alert('Please enter a username')
        }


        handleSignUp();



    }


    async function handleSignUp() {

        const uid = uuidv4();

        addUser({
            name: username,
            status: "searching",
            userid: uid,
            createdAt: Date.now()
        })
        await setDoc(doc(db, "users", uid), {
            name: username,
            status: "searching",
            userid: uid,
            createdAt: serverTimestamp()
        }).then(() => {
            alert('success')

        })
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
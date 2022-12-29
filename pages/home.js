import React, { useEffect, useState } from 'react'
import GuestComponent from '../components/GuestComponent'
import AuthComponent from '../components/AuthComponent';
import useAuthStore from '../store/authStore';

function Home() {




    const { userProfile, addUser } = useAuthStore();


    return (
        <div className='bg-black min-h-scren w-full h-full '>
            <h2 className='text-purple-600 text-xl font-semibold p-4'>Anon Chat</h2>



            {userProfile ? <AuthComponent /> : <GuestComponent />}


        </div>
    )
}

export default Home
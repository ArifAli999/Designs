import React, { useEffect, useState } from 'react'
import GuestComponent from '../components/GuestComponent'
import AuthComponent from '../components/AuthComponent';
import useAuthStore from '../store/authStore';
import ChatComp from '../components/ChatComp';

function Home() {




    const { userProfile, addUser } = useAuthStore();


    return (


        <>

            {userProfile && userProfile.userid ? <ChatComp /> : <GuestComponent />}
        </>


    )
}

export default Home
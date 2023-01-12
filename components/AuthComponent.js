import React, { useEffect } from 'react'
import ChatGrid from './ChatGrid'
import useAuthStore from '../store/authStore'

function AuthComponent() {

    const { userProfile } = useAuthStore();

    // console.log(userProfile)


    useEffect(() => {
        if (userProfile) {

            MatchUser()
        }
    }, [userProfile])



    function MatchUser() {
        if (userProfile.status === 'searching') {

        }


    }


    async function fetchAvailableUsers() {

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        })
    }

    return (
        <div className='text-white flex w-[90%] mx-auto border border-white rounded p-0 flex-col'>




        </div>
    )
}

export default AuthComponent
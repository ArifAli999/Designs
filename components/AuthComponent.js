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
            <div className='border-b border-white p-4 w-full flex justify-between items-center'>
                <div className=''>
                    <p className=''> Hello {userProfile.name}</p>
                </div>


                <div className='flex items-center gap-4 cursor-pointer'>
                    <p className=''>Inbox</p>
                    <p className=''>Settings</p>
                    <p className=''>Leave</p>
                </div>
            </div>
            <div className='border-b border-white p-4 w-full flex justify-between items-center'>
                <button className="border-red-700 border-2 hover:bg-purple-700 text-white font-light text-xs py-1.5 px-4 rounded-md">
                    STATUS: DISCONNECTED
                </button>


                <div className=''>
                    <button className="border-neutral-700 border-2 hover:border-purple-700 text-white font-normal text-base py-1.5 px-4 rounded-md">
                        Next
                    </button>
                </div>
            </div>


            <ChatGrid />



        </div>
    )
}

export default AuthComponent
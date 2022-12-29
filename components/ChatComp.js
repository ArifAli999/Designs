import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import useAuthStore from '../store/authStore'
import { useQueryClient } from 'react-query';
import { useQuery, useInfiniteQuery } from "react-query";

function ChatComp() {

    const queryClient = useQueryClient()
    const { userProfile } = useAuthStore()
    const [users, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState();



    useEffect(() => {
        dataFetch()


    }, [])




    async function dataFetch() {
        const q = query(collection(db, "users"), where("status", "==", 'searching'));

        const querySnapshot = await getDocs(q);
        const posts = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            posts.push(doc.data())
            setUser(posts)
            //console.log(posts)
        })

        await getMatch(posts)

    }
    async function getMatch(list) {
        let newList = list && list.filter(user => user.userid !== userProfile.userid)


        if (newList.length > 0) {

            const randomIndex = Math.floor(Math.random() * newList.length);

            const randomObject = newList[randomIndex];

            // console.log(randomObject);
            setCurrentUser(randomObject)
        }
    }



    // console.log(users)

    return (
        <div className='flex flex-col gap-6 w-full md:p-8 p-4'>
            <div className=''>
                chat box connected tooo : {currentUser && currentUser.name}
            </div>

            <div className='flex items-center w-full gap-4 '>
                <div className='flex-1'>
                    <textarea className='w-[100%]  bg-transparent border border-neutral-500  rounded focus:border-purple-500 focus:ring-1  focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       focus:outline-none p-2'></textarea>
                </div>

                <div className=''>
                    <button onClick={() => getMatch(users)} className='px-6 py-4 w-full h-full border border-white text-white cursor-pointer rounded-full'>
                        Next </button>
                </div>

            </div>
        </div>
    )
}

export default ChatComp
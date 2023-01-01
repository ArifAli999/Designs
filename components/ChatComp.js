import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc, getDocs, onSnapshot, query, where, serverTimestamp, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import useAuthStore from '../store/authStore'
import { useQueryClient } from 'react-query';
import { useQuery, useInfiniteQuery } from "react-query";
import { uuidv4 } from '@firebase/util';

function ChatComp() {

    const queryClient = useQueryClient()
    const { userProfile } = useAuthStore()
    const [users, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [room, setRoom] = useState();
    const [chatMessage, setChatMessage] = useState('');
    const [myA, setmyA] = useState([])
    const [messages, setMessages] = useState([]);







    useEffect(() => {
        dataFetch()


    }, [])

    useEffect(() => {
        if (currentUser) {
            createRoom(currentUser)
        }

    }, [users])

    useEffect(() => {
        if (room && room.roomid) {
            getMessages();
        }
    }, [room])





    async function createRoom(user) {
        const uid = uuidv4()

        if (user) {
            await setDoc(doc(db, "activerooms", uid), {
                user1id: userProfile.userid,
                user2id: user.userid,
                user1: userProfile.name,
                user2: user.name,
                createdAt: serverTimestamp(),
                roomid: uid,
            });

            checkRoom(uid)
        }

    }

    async function sendMessage(id) {


        const docRef = doc(db, "activerooms", `${room.roomid}`);

        if (room && room.roomid) {

            myA.push({
                sentBy: id,
                content: chatMessage,
            },)
            await updateDoc(docRef, {
                messages: myA
            }).then(() => {
                alert('mssage seent')
                setChatMessage('')

            });



        }

    }


    async function checkRoom(uid) {
        if (uid) {
            const docRef = doc(db, "activerooms", uid);

            const docSnap = await getDoc(docRef);


            if (docSnap.exists()) {
                console.log(docSnap.data())
                setRoom(docSnap.data());

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

    }


    async function getMessages() {
        const msg = []
        if (room && room.roomid) {
            const unsub = onSnapshot(doc(db, "activerooms", room.roomid), (doc) => {


                setMessages(doc.data())




            })
        }

    }



    async function dataFetch() {
        const q = query(collection(db, "users"), where("status", "==", 'searching'), where("userid", "!=", userProfile.userid));

        const querySnapshot = await getDocs(q);
        const posts = []

        querySnapshot.forEach((doc) => {
            posts.push(doc.data())
            setUser([...posts])

        })


        await getMatch(posts)
        return posts



    }
    async function getMatch(list) {
        if (list.length === 0) return alert('No more items in the list');
        const newArray = [];
        if (list.length > 0) {

            const randomIndex = Math.floor(Math.random() * list.length);

            const randomObject = list[randomIndex];

            newArray.push(randomObject);

            // console.log(randomObject);

            setUser(list.filter(item => item !== randomObject));
            setCurrentUser(randomObject)
        }
    }






    // console.log(users)

    return (
        <div className='flex flex-col gap-6 w-full md:p-8 p-4'>
            <div className=''>
                chat box connected tooo : {currentUser && currentUser.name} - {room && room.roomid}
            </div>

            <div className=''>
                {messages && messages.messages?.map((m) =>
                    <p>{m.sentBy}: {m.content}</p>
                )}

            </div>

            <div className='flex items-center w-full gap-4 '>
                <div className='flex-1'>
                    <textarea className='w-[100%]  bg-transparent border border-neutral-500  rounded focus:border-purple-500 focus:ring-1  focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       focus:outline-none p-2'
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}

                    ></textarea>
                </div>

                <div className=''>
                    <button onClick={() => sendMessage(userProfile.userid)} className=''>seend</button>
                    <button onClick={() => getMatch(users)} className='px-6 py-4 w-full h-full border border-white text-white cursor-pointer rounded-full'>
                        Next </button>
                </div>

            </div>
        </div>
    )
}

export default ChatComp
import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc, getDocs, onSnapshot, query, where, serverTimestamp, getDoc, updateDoc, arrayUnion, limit } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import useAuthStore from '../store/authStore'
import { useQueryClient } from 'react-query';
import { useQuery, useInfiniteQuery } from "react-query";
import { uuidv4 } from '@firebase/util';

function ChatComp() {

    const queryClient = useQueryClient()
    const { userProfile } = useAuthStore()
    const [room, setRoom] = useState();
    const [chatMessage, setChatMessage] = useState('');
    const [myA, setmyA] = useState([])
    const [messages, setMessages] = useState();
    const [connected, setConnected] = useState(room ? true : false);
    let roomSet = false;
    let roomId = ''

    useEffect(() => {
        searchRooms()

        if (room) {
            console.log(room.roomid)
        }


    }, [])





    useEffect(() => {
        const getChat = () => {
            const unsub = onSnapshot(doc(db, 'rooms', room.roomid), (doc) => {
                doc.exists() && setMessages(doc.data().messages)
            })


            return () => {
                unsub();
            }

        }

        room && getChat()


    }, [room])






    // 1- search db for available rooms. searchRooms

    // 2- if room exists, update the room and make it unavailable - updateRoom 

    // 3 - if room does not exist, creeate a new room and wait for someone to join.  - createRoom.



    async function searchRooms() {

        const q = query(collection(db, "rooms"), where("status", "==", 'searching'), limit(1));

        const querySnapshot = await getDocs(q);
        const availableRooms = []

        if (querySnapshot.empty) {
            // Creeate a neew room for user.
            console.log('no rooms found - creating one')
            createRoom()

        }

        else {
            querySnapshot.forEach((doc) => {
                availableRooms.push(doc.data())
                setRoom(doc.data())
                roomSet = true;


            })

            // updateRoom()
            // update row 



        }




    }


    async function updateRoom(id) {


        const romId = room && room.roomid
        console.log(romId)


        if (romId) {

            const docRef = doc(db, "rooms", romId);

            await updateDoc(docRef, {
                user2id: userProfile.userid,
                user2: userProfile.name,
                status: 'connected',
            }).then(() => {
                console.log('room seetup successful')
                setConnected(true)

            })


        }


    }


    async function createRoom() {
        // if no room exists createe one.
        const uid = uuidv4()
        await setDoc(doc(db, "rooms", uid), {
            user1id: userProfile.userid,
            user2id: '',
            user1: userProfile.name,
            user2: '',
            createdAt: serverTimestamp(),
            roomid: uid,
            status: 'searching'
        }).then(() => {
            console.log('creating room')

            // geet the room details and storee in the room state valuee,

            getRoom(uid)
            setConnected(true)
        })
    }


    async function getRoom(id) {

        const docRef = doc(db, "rooms", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());

            setRoom(docSnap.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }


    async function sendMessage() {


        const docRef = doc(db, "rooms", room.roomid);

        if (room && room.roomid) {

            const uid = uuidv4()
            await updateDoc(docRef, {
                messages: arrayUnion({
                    messageId: uid,
                    sentBy: userProfile.name,
                    userId: userProfile.userid,
                    content: chatMessage
                })
            }).then(() => {

                setChatMessage('')


            });



        }

    }






    return (
        <div className='flex flex-col gap-6 w-full md:p-8 p-4'>
            <div className=''>


                {room && room.roomid} - {room && room.status}
            </div>

            <div className=''>

                {messages && messages.map((m) => (
                    <p>{m.sentBy}: {m.content}</p>
                ))}
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
                    <button onClick={() => sendMessage()} className=''>seend</button>
                    <button onClick={() => console.log('test')} className='px-6 py-4 w-full h-full border border-white text-white cursor-pointer rounded-full'>
                        Next </button>
                </div>

            </div>
        </div>
    )
}

export default ChatComp
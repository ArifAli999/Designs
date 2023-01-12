import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc, getDocs, onSnapshot, query, where, serverTimestamp, getDoc, updateDoc, arrayUnion, limit } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import useAuthStore from '../store/authStore'
import { useQueryClient } from 'react-query';
import { useQuery, useInfiniteQuery } from "react-query";
import { uuidv4 } from '@firebase/util';
import { get } from 'firebase/database';
import ChatHeader from './ChatComponents/ChatHeader';
import ChatStream from './ChatComponents/ChatStream';
import ChatBox from './ChatComponents/ChatBox';

function ChatComp() {

    const queryClient = useQueryClient()
    const { userProfile } = useAuthStore()
    const [room, setRoom] = useState();
    const [chatMessage, setChatMessage] = useState('');
    const [myA, setmyA] = useState([])
    const [messages, setMessages] = useState();
    const [connected, setConnected] = useState(room ? true : false);







    useEffect(() => {
        searchRooms()
    }, [])



    // 1- search db for available rooms. searchRooms

    // 2- if room exists, update the room and make it unavailable - updateRoom 

    // 3 - if room does not exist, creeate a new room and wait for someone to join.  - createRoom.



    async function searchRooms() {

        const q = query(collection(db, "rooms"), where("status", "==", 'searching'), limit(1));

        const querySnapshot = await getDocs(q);
        const availableRooms = []

        if (querySnapshot.empty) {
            // Creeate a neew room for user.
            //   console.log('no rooms found - creating one')
            createRoom();
        }




        else {

            // if rooms found, join user to the room by updating the room details.
            querySnapshot.forEach((doc) => {
                availableRooms.push(doc.data())
                setRoom(doc.data())
            })



            // update row 



            updateRoom(availableRooms.map(m => m.roomid).toString(), availableRooms.map(m => m.user1id).toString())



        }




    }


    async function updateRoom(id, userid) {



        if (id && userid === userProfile.userid) return createRoom();


        else {
            const docRef = doc(db, "rooms", id);
            console.log('firing this one')
            await updateDoc(docRef, {
                user2id: userProfile.userid,
                user2: userProfile.name,
                status: 'connected',
            }).then(() => {
                console.log('room seetup successful')
                setConnected(true)
                getRoom(id)
                queryClient.invalidateQueries()

                //  getRoomDeets(id)

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
            queryClient.invalidateQueries()
            await updateDoc(docRef, {
                messages: arrayUnion({
                    messageId: uid,
                    sentBy: userProfile.name,
                    userId: userProfile.userid,
                    content: chatMessage
                })

            }).then(() => {

                setChatMessage('')
                queryClient.invalidateQueries()




            });



        }

    }






    return (
        <div className='flex flex-col  p-0 w-full gap-0 bg-slate-800 h-full relative'>

            <ChatHeader room={room} />



            <ChatStream messages={messages} room={room} />



            <ChatBox chatMessage={chatMessage} sendMessage={sendMessage} setChatMessage={setChatMessage} />





        </div>
    )
}

export default ChatComp
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../../firebase/firebase.config'
import { useQuery } from 'react-query'

function ChatStream({ messages, room }) {

    const roomId = room?.roomid
    const { isLoading, error, data } = useQuery({
        queryKey: ['messages'],
        queryFn: () =>
            getData(roomId),
        enabled: !!roomId,
        refetchInterval: 1,

    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    console.log('messages found', data)
    async function getData(id) {
        try {
            const docRef = doc(db, "rooms", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log('thisn', docSnap.data())
                return docSnap.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        }

        catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='w-full flex-col gap-4 mt-4 flex  max-h-[600px]  overflow-auto sm:max-h-[650px]  scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-600 px-4 scrollbar-rounded-md ' >


            {data && data.messages && data?.messages.map((m) => (
                <div className='text-white flex-1 bg-slate-700 w-full h-full p-4 rounded '>
                    <div class="flex items-center space-x-4">
                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class="font-medium dark:text-white">
                            <div className='' key={m.messsageId}>{m.sentBy}: {m.content}</div>
                        </div>
                    </div>
                </div>


            ))}






        </div>
    )
}

export default ChatStream
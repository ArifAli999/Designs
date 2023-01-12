import { useState, useEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { useGetFetchQuery } from '../utils/useGetFetchQuery';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase.config'
import ChatHeader from '../components/ChatComponents/ChatHeader'
import ChatStream from '../components/ChatComponents/ChatStream'
import ChatBox from '../components/ChatComponents/ChatBox'



const RqPage = () => {




  async function getData() {
    try {
      const docRef = doc(db, "users", "53f36eac-ee3f-44f0-ac18-dc7944fbc84a");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

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

  /*
  const roomId = room?.roomid
  const { isLoading, error, data } = useQuery({
      queryKey: ['messages'],
      queryFn: () =>
        getData(roomId),
         enabled: !!roomId,
    })
  
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message */

  //  console.log(data)



  return (

    <div className='flex flex-col  p-0 w-full gap-0 bg-slate-800 h-full relative'>


      <ChatHeader />


      <ChatStream />


      <ChatBox />


    </div>

  )






}

export default RqPage;
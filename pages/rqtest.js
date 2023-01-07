import { useState, useEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { useGetFetchQuery } from '../utils/useGetFetchQuery';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase.config'



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

  const { isLoading, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      getData()
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)



  return (

    <div className='flex flex-col items-center p-4 mx-auto gap-6 bg-slate-800 h-full relative'>
      <div className='w-full flex-col gap-4 flex  max-h-[600px]  overflow-auto md:max-h-[600px] lg:max-h-[600px] scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-600 px-4 scrollbar-rounded-md' >
        <div className='text-white flex-1 bg-slate-500 w-full h-full p-4 rounded '>
          <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <div class="font-medium dark:text-white">
              <div>Jese Leos</div>
            </div>
          </div>
        </div>


        <div className='text-white flex-1 bg-slate-700 w-full h-full p-4 rounded '>
          <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <div class="font-medium dark:text-white">
              <div>Riffy</div>
            </div>
          </div>
        </div>


        <div className='text-white flex-1 bg-slate-700 w-full h-full p-4 rounded '>
          <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <div class="font-medium dark:text-white">
              <div>Riffy</div>
            </div>
          </div>
        </div>


















        <div className='text-white flex-1 bg-slate-700 w-full h-full p-4 rounded '>
          <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <div class="font-medium dark:text-white">
              <div>Riffy</div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full flex flex-row gap-6 items-center absolute bottom-0'>
        <div className='flex-1'>
          <label for="chat" class="sr-only">Your message</label>
          <div class="flex items-center px-3 py-2  bg-gray-50 dark:bg-gray-700">

            <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Add emoji</span>
            </button>
            <textarea id="chat" rows="2" class="block mx-2 my-1.5 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
              <span class="sr-only">Send message</span>
            </button>
          </div>
        </div>
      </div>


    </div>

  )






}

export default RqPage;
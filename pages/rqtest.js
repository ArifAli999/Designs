import { useState, useEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { useGetFetchQuery } from '../utils/useGetFetchQuery';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase/firebase.config'



const RqPage = () => {


    async function getData () {
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
            <h1>{data && data.name}</h1>
        )

        
    



}

export default RqPage;
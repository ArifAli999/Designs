import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from 'react-query'
import React, { useEffect, useState } from "react";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'



function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());


  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);




  if (isSSR) return null;

  return (
    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />

    </QueryClientProvider>
  );
}

export default MyApp

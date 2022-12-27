import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from 'react-query'
import React, { useState } from "react";


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());


  return (
    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />

    </QueryClientProvider>
  );
}

export default MyApp

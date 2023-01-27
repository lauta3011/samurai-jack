import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReactQueryDevtools } from "react-query/devtools";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppWrapper from './renderer/components/AppWrapper';

import { QueryClient, QueryClientProvider } from "react-query";

//query client is the provider that lets us cache the data fetched from the api
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 0,
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>    
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
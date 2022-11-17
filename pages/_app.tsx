import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from 'next/app'

import { ThemeProvider } from '../context/ThemeContextProvider'

import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store'
import { PersistGate } from "redux-persist/integration/react";

import Layout from '../layout/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  
  return(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading="null" persistor={persistor}>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  ) 
}

export default MyApp

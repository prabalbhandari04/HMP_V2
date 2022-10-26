import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { ThemeProvider } from '../context/ThemeContextProvider'

import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store'
import { PersistGate } from "redux-persist/integration/react";

import Layout from '../layout/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  ) 
}

export default MyApp

import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContextProvider'
import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  ) 
}

export default MyApp

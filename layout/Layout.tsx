/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { useThemeContext } from '../context/ThemeContextProvider'
import { themes } from '../context/Themes'
import Global from '../styles/Global'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Root = styled.div`
  background-color: ${props => props.theme.body};
  width: 100%;
  min-height: 100vh;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, setTheme } = useThemeContext();

  const router = useRouter();

  useEffect(() => {
    const darkMode = localStorage.getItem('dark');
    if (darkMode === null) {
      localStorage.setItem('dark', 'false');
    }
    else if (darkMode === 'true') {
      setTheme?.(themes.dark);
    } else {
      setTheme?.(themes.light);
    }
  }, [])

  const forbiddenPaths = ['/auth', '/auth/forgot', '/auth/change']

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Head>
        <title>Handle My Paper</title>
        <meta name="description" content="Find experts to help you with your assignments." />
        <link rel="icon" href="/favicon.ico" />
        <link rel='manifest' href='/manifest.json' />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="stylesheet" /> 

      </Head>

      <Root>
        {!forbiddenPaths.some(path => router.pathname.includes(path)) && <Navbar />}

        <div className='max-w-[1366px] mx-auto flex flex-col gap-y-8 px-4'>
          { children }    
        </div>

        {!forbiddenPaths.some(path => router.pathname.includes(path)) && <Footer />}

      </Root>
    </ThemeProvider>
  )
}

export default Layout
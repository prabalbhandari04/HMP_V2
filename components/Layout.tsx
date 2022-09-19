/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
        <div>
            <Head>
              <title>Handle My Paper</title>
              <meta name="description" content="Reincarnate your unfulfilled wish" />
              <link rel="icon" href="/favicon.ico" />
              <link rel='manifest' href='/manifest.json' />

              {/* Fonts */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300&display=swap" rel="stylesheet" />

            </Head>

            <div className='px-4 xl:px-0'>
              <div>
                { children }    
              </div>
            </div>
        </div>
  )
}

export default Layout
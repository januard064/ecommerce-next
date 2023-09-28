import '@/styles/globals.css'
import localFont from 'next/font/local'
import Layout from '@/components/Layout/layout'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

import Head from 'next/head'

import { ShoppingContextProvider } from '@/store/shopping-context'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Commerce</title>
        <link rel="icon" href="/next-commerce-logo.ico" sizes="any" />
        <meta name="description" content="Submit message and send your contact" />
      </Head>

      <ShoppingContextProvider>
        <Navbar />
        <Layout isBody={true}>
          <div className='min-h-[calc(100vh-610px)]'>
            <Component {...pageProps} />
          </div>
        </Layout>
        <Footer />
      </ShoppingContextProvider>
    </>

  )

}

import '@/styles/globals.css'
import localFont from 'next/font/local'
import Layout from '@/components/Layout/layout'
import Navbar from '@/components/navbar/navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )

}

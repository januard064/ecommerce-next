import '@/styles/globals.css'
import localFont from 'next/font/local'
import Layout from '@/components/Layout/layout'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout isBody={true}>
        <div className='min-h-[calc(100vh-610px)]'>
          <Component {...pageProps} />
        </div>
      </Layout>
      <Footer />
    </>

  )

}

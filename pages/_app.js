import '@/styles/globals.css'
import localFont from 'next/font/local'
import Layout from '@/components/Layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductCardList from '@/components/product-card/product-card-list'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div style={{ color: 'red', fontFamily:'Poppins-Bold', fontSize:'48px'  }}>Landing Page</div>
      <ProductCardList />
    </>
  )
}

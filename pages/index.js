import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductCardList from '@/components/product-card/product-card-list'
import Carousel from '@/components/carousel/carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Carousel />
      <ProductCardList />
    </>
  )
}

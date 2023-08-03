import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/components/carousel/carousel'
import FeaturedProductSection from '@/components/home-page-section/featured-product-section'
import CategoryProductSection from '@/components/home-page-section/category-product-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Carousel />

      <FeaturedProductSection />

      <CategoryProductSection />

      <FeaturedProductSection />

    </>
  )
}

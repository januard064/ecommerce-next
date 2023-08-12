import Image from 'next/image'
import { Inter } from 'next/font/google'
import CarouselComponent from '@/components/carousel/carousel'
import FeaturedProductSection from '@/components/home-page-section/featured-product-section'
import CategoryProductSection from '@/components/home-page-section/category-product-section'
import { getFeaturedProducts, getProducts } from '@/api-helpers/api-utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const { featuredProducts } = props

  console.log('featuredProducts', featuredProducts)

  return (
    <>
      <CarouselComponent />

      <FeaturedProductSection featuredProducts={featuredProducts} />

      <CategoryProductSection />

      <FeaturedProductSection />

    </>
  )
}

export async function getStaticProps() {

  // const allProducts = await getProducts()

  const featuredProducts = await getFeaturedProducts()

  return {
    props: {
      // products: allProducts,
      featuredProducts: featuredProducts
    },
    revalidate: 1800
  }
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CarouselComponent from '@/components/carousel/carousel'
import FeaturedProductSection from '@/components/home-page-section/featured-product-section'
import CategoryProductSection from '@/components/home-page-section/category-product-section'
import { getFeaturedProducts, getProducts, getCategoryProducts } from '@/api-helpers/api-utils'
import { convertCategories } from '@/api-helpers/api-format-utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const { featuredProducts, categories } = props

  return (
    <>
      <CarouselComponent />

      <FeaturedProductSection featuredProducts={featuredProducts} />

      <CategoryProductSection categories={categories} />

      <FeaturedProductSection />

    </>
  )
}

export async function getStaticProps() {

  // fetch featuredProducts
  const featuredProducts = await getFeaturedProducts()

  // fetch category from API
  const categoryArray = await getCategoryProducts()
  // convert array of category to insert custom image
  const productCategories = convertCategories(categoryArray)
  const feturedCategory = productCategories.slice(10, 17)

  return {
    props: {
      featuredProducts: featuredProducts,
      categories: feturedCategory
    },
    revalidate: 1800
  }
}
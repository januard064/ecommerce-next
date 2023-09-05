import { useRouter } from "next/router"

import { getCategoryProducts } from "@/api-helpers/api-utils"
import { convertCategories } from "@/api-helpers/api-format-utils"

import ProductCategoryDetail from "@/components/product-category/product-category-detail"
import TitleSeparator from "@/components/title-separator/title-separator"

const Categories = (props) => {

    const { productCategories } = props

    const router = useRouter()
    const goToProductsPage = (category) => {
        const path = `/categories/${category}`

        router.push(path)
    }

    return (
        <>
            <TitleSeparator firstTitle={'Check'} secondTitle={'All of Our Products'} />
            <div className="grid grid-cols-4 gap-4">
                {productCategories.map((category) => (
                    <ProductCategoryDetail category={category} goToProductsPage={goToProductsPage} />
                ))}
            </div>
        </>
    )
}

export default Categories

export async function getServerSideProps() {
    // fetch category from API
    const categoryArray = await getCategoryProducts()
    // convert array of category to insert custom image
    const productCategories = convertCategories(categoryArray)

    return {
        props: {
            productCategories: productCategories
        }
    }

} 
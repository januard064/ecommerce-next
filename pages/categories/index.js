import { useRouter } from "next/router"
import { useEffect, useContext } from "react"

import { ShoppingContext } from "@/store/shopping-context"


import { getCategoryProducts } from "@/api-helpers/api-utils"
import { convertCategories } from "@/api-helpers/api-format-utils"
import { CategoriesPageRoute } from "@/Consants/RouterConst"

import ProductCategoryDetail from "@/components/product-category/product-category-detail"
import TitleSeparator from "@/components/title-separator/title-separator"
import BreadCrumb from "@/components/ui-guide-component/breadcrumb"

const Categories = (props) => {

    const { routerPath } = useContext(ShoppingContext)

    const { productCategories } = props

    const router = useRouter()
    const goToProductsPage = (category) => {
        const path = `/categories/${category}`

        router.push(path)
    }

    /**BreadCrumb Path */
    CategoriesPageRoute.disable = true
    routerPath.push(CategoriesPageRoute)

    return (
        <>
            <BreadCrumb />
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
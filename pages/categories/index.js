import { getCategoryProducts } from "@/api-helpers/api-utils"
import { convertCategories } from "@/api-helpers/api-format-utils"

import ProductCategoryDetail from "@/components/product-category/product-category-detail"

const Categories = (props) => {

    const { productCategories } = props

    return (
        <div className="grid grid-cols-4 gap-4">
            {productCategories.map((category) => (
                <ProductCategoryDetail category={category} />
            ))}
        </div>
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
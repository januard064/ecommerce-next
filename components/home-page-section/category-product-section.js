import TitleSeparator from "../title-separator/title-separator"
import ProductCategory from "../product-category/product-category"
import { getCategoryProducts } from "@/api-helpers/api-utils"

import { convertCategories } from "@/api-helpers/api-format-utils"

const CategoryProductSection = (props) => {

    const { categories } = props

    if (!categories) {
        return
    }

    return (
        <div className="mt-[120px]">
            <TitleSeparator firstTitle={'Shop from'} secondTitle={'Top Categories'} />
            <div className={`flex`}>
                {categories.map((category, index) => (
                    <div key={`${category}-${index}`} className={`${index == 0 ? 'ml-0' : 'ml-[46px]'}`}>
                        <ProductCategory category={category} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CategoryProductSection
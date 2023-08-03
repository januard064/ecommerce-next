import TitleSeparator from "../title-separator/title-separator"
import ProductCategory from "../product-category/product-category"

const CategoryProductSection = () => {
    return (
        <div class="mt-[120px]">
            <TitleSeparator firstTitle={'Grab the best deal on'} secondTitle={'Smartphones'} />
            <ProductCategory />
        </div>
    )
}

export default CategoryProductSection
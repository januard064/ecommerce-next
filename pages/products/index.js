import { getProducts } from "@/api-helpers/api-utils"
import ProductCard from "@/components/product-card/product-card"

const Products = (props) => {

    const { allProducts } = props

    if (!allProducts) {
        return
    }

    return (
        <div className="  ">
            <div class="grid grid-cols-5 gap-4">
                {allProducts.map((product, index) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products

export async function getStaticProps() {

    const allProducts = await getProducts()

    return {
        props: {
            allProducts: allProducts.products
        },
        revalidate: 60
    }

}
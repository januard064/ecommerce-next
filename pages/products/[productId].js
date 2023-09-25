import ProductDetail from "@/components/product-detail/product-detail"
import TitleSeparator from "@/components/title-separator/title-separator"

import ProductCardList from "@/components/product-card/product-card-list"

const ProductDetails = (props) => {

    if (!props.product) {
        return
    }

    return (
        <div className="text-black">
            <ProductDetail product={props.product} initQuantity={props.initQuantity} />
            <div className="mt-[80px]">
                <TitleSeparator firstTitle={'Grab'} secondTitle={'Similar Products'} />
                <ProductCardList products={props.similarProducts.products} />
            </div>
        </div>
    )
}

export default ProductDetails

export async function getServerSideProps(context) {

    const { params } = context

    const productResponse = await fetch(`https://dummyjson.com/products/${params.productId}`)
    const product = await productResponse.json()

    const similarProductsResponse = await fetch(`https://dummyjson.com/products/category/${product.category}`)
    const similarProducts = await similarProductsResponse.json()

    const initQuantity = 1

    // console.log('similarProducts', similarProducts)
    if (productResponse.status == '404') {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    return {
        props: {
            product: product,
            similarProducts: similarProducts,
            initQuantity: initQuantity
        }
    }
}
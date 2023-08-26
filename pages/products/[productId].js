import ProductDetail from "@/components/product-detail/product-detail"

const ProductDetails = (props) => {

    if(!props.product){
        return
    }

    return (
        <div className="text-black">
            <ProductDetail product={props.product} />
        </div>
    )
}

export default ProductDetails

export async function getServerSideProps(context) {

    const { params } = context

    const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
    const product = await response.json()

    if (response.status == '404') {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    return {
        props: {
            product: product,
        }
    }
}
import ProductCard from "./product-card"

const ProductCardList = (props) => {

    const { products } = props

    if(!products){
        return 
    }
    return (
        <>
            <div className="flex">
                {products.map((product) => (
                    <div className="mr-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCardList
import ProductCard from "./product-card"

const ProductCardList = () => {
    return (
        <>
            <div className="flex">
                {[0, 1, 2, 3, 4].map((res) => (
                    <div className="mr-4">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCardList
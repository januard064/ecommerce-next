import ProductCard from "./product-card"

const ProductCardList = () => {
    return (
        <>
            <div class="flex">
                {[0, 1, 2, 3, 4].map((res) => (
                    <div class="mr-4">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCardList
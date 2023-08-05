import TitleSeparator from "../title-separator/title-separator"
import ProductCardList from "../product-card/product-card-list"

const FeaturedProductSection = () => {
    return (
        <div className="mt-[120px]">
            <TitleSeparator firstTitle={'Grab the best deal on'} secondTitle={'Smartphones'} />
            <ProductCardList />
        </div>
    )
}

export default FeaturedProductSection
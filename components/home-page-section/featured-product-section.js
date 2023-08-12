import TitleSeparator from "../title-separator/title-separator"
import ProductCardList from "../product-card/product-card-list"

const FeaturedProductSection = (props) => {
    console.log('{props.featuredProducts}',props.featuredProducts)
    return (
        <div className="mt-[120px]">
            <TitleSeparator firstTitle={'Grab our'} secondTitle={'best selling product'} />
            
            <ProductCardList products={props.featuredProducts} />
        </div>
    )
}

export default FeaturedProductSection
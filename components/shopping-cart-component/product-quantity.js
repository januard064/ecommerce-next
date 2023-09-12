import CartTableBodyHeight from "./cart-table-body-height"
import QuantityChip from "../product-detail/quantity-chip"

export const ProductQuantity = (props) => {


    return (
        <div className="w-[18%]">
            <CartTableBodyHeight>
                <QuantityChip product={props.product} cart={true} />
            </CartTableBodyHeight>
        </div>
    )
}

export default ProductQuantity
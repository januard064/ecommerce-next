import CartTableBodyHeight from "./cart-table-body-height"
import QuantityChip from "../product-detail/quantity-chip"

export const ProductQuantity = (props) => {

    const { quantity, setQuantity, enteredQuantity, setEnteredQuantity, product } = props

    return (
        <div className="w-[18%]">
            <CartTableBodyHeight>
                <QuantityChip quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={props.product} cart={true} />
            </CartTableBodyHeight>
        </div>
    )
}

export default ProductQuantity
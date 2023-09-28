import CartTableBodyHeight from "./cart-table-body-height"
import QuantityChip from "../product-detail/quantity-chip"

import MinusIcon from "../icons/minus-icon"
import PlusIcon from "../icons/plus-icon"

export const ProductQuantity = (props) => {

    const { quantity, setQuantity, enteredQuantity, setEnteredQuantity, product, isChecked } = props

    return (
        <div className="w-[18%]">
            <CartTableBodyHeight>
                {isChecked ? (<>


                    <div className={`h-10 border-[1px] border-[#BEBCBD] w-fit flex items-center rounded-[8px] px-3`}>
                        <div>
                            <MinusIcon reachMin={true} />
                        </div>
                        <div>
                            <input
                                className="w-10 bg-[#FFFFFF] text-[#BEBCBD] text-center hover:outline-none focus:outline-none"
                                value={quantity}
                                disabled
                            />
                        </div>
                        <div>
                            <PlusIcon reachMax={true} />
                        </div>
                    </div>
                </>) : (<>
                    <QuantityChip quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={props.product} cart={true} />
                </>)}
            </CartTableBodyHeight>
        </div>
    )
}

export default ProductQuantity
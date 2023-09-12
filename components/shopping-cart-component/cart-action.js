import CartTableBodyHeight from "./cart-table-body-height"

import LoveIcon from "../icons/love-icon"
import DeleteIcon from "../icons/delete-icon"

export const CartAction = () => {

    return (
        <div className="w-[6%] flex justify-end">
            <CartTableBodyHeight>
                <div className="flex mr-3">
                    <div className="cursor-pointer">
                        <LoveIcon />
                    </div>

                    <div className="ml-3 cursor-pointer">
                        <DeleteIcon />
                    </div>
                </div>
            </CartTableBodyHeight>
        </div>
    )
}

export default CartAction
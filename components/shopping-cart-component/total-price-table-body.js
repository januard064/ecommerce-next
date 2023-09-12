import CartTableBodyHeight from "./cart-table-body-height"
import { discountTotal, rupiahCurrency } from "../ui-utils"

const TotalPriceTableBody = (props) => {

    const { product } = props

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)
    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)

    return (
        <div className="w-[20%]">
            <CartTableBodyHeight>
                {rupiahCurrency(priceAfterDiscount)}
            </CartTableBodyHeight>
        </div>
    )
}

export default TotalPriceTableBody
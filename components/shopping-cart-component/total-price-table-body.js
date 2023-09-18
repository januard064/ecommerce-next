import { useEffect } from "react"

import CartTableBodyHeight from "./cart-table-body-height"
import { discountTotal, rupiahCurrency } from "../ui-utils"

const TotalPriceTableBody = (props) => {

    const { totalProductPrice } = props

    return (
        <div className="w-[20%]">
            <CartTableBodyHeight>
                {rupiahCurrency(totalProductPrice)}
            </CartTableBodyHeight>
        </div>
    )
}

export default TotalPriceTableBody
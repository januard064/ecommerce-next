import { useEffect, useState } from "react"

import CheckProudctTableBody from "./check-proudct-table-body"
import ProductDetailTableBody from "./product-detail-table-body"
import PriceTableBody from "./price-table-body"
import ProductQuantity from "./product-quantity"
import CartAction from "./cart-action"
import TotalPriceTableBody from "./total-price-table-body"

import { rupiahCurrency, discountTotal, decimalRatingDigit, discountDecimal } from "../ui-utils"

const CartTableBody = (props) => {

    const { cart, setTotalOriginalPrice, setTotalDiscount, setOrderTotalPrice } = props

    // quantity for checkout or shop
    const [quantity, setQuantity] = useState(1)
    const [enteredQuantity, setEnteredQuantity] = useState(1)

    const saveAfterDiscount = discountTotal(cart.discountPercentage, cart.price)
    const priceAfterDiscount = parseFloat(cart.price) - parseFloat(saveAfterDiscount)

    const [totalProductPrice, setTotalProductPrice] = useState(0)

    useEffect(() => {
        setTotalProductPrice(priceAfterDiscount * quantity)
        setTotalDiscount(saveAfterDiscount * quantity)
        setTotalOriginalPrice(cart.price * quantity)
        console.log('total',)
    }, [quantity])

    // useEffect(() => {
    //     setTotalPrice(totalProductPrice)
    //     setTotalDiscount(saveAfterDiscount)
    //     // setOrderTotalPrice(totalProductPrice)
    // }, [totalProductPrice])

    return (
        <div className="flex mt-10 pb-10 border-b-2 border-[#EDEDED]">

            <div className="w-[32%] flex">
                <CheckProudctTableBody />
                <ProductDetailTableBody cart={cart} />
            </div>


            <PriceTableBody product={cart} priceAfterDiscount={priceAfterDiscount} saveAfterDiscount={saveAfterDiscount} />

            <ProductQuantity quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={cart} />

            <TotalPriceTableBody totalProductPrice={totalProductPrice} />

            <CartAction />

        </div>
    )
}

export default CartTableBody
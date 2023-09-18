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

    // product in shopping cart
    const [productInCart, setProductInCart] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    // quantity for checkout or shop
    const [quantity, setQuantity] = useState(1)
    const [enteredQuantity, setEnteredQuantity] = useState(1)



    const [totalProductPrice, setTotalProductPrice] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://dummyjson.com/products/${cart.productId}`)
            .then((response) => response.json())
            .then((product) => {
                console.log(product)
                setProductInCart(product)
                setIsLoading(false)
            })
    }, [])


    const saveAfterDiscount = discountTotal(productInCart.discountPercentage, productInCart.price)
    const priceAfterDiscount = parseFloat(productInCart.price) - parseFloat(saveAfterDiscount)

    useEffect(() => {
        setTotalProductPrice(priceAfterDiscount * quantity)
        setTotalDiscount(saveAfterDiscount * quantity)
        setTotalOriginalPrice(productInCart.price * quantity)
        console.log('total',)
    }, [productInCart, quantity])

    if (isLoading) {
        return
    }


    return (
        <div className="flex mt-10 pb-10 border-b-2 border-[#EDEDED]">

            <div className="w-[32%] flex">
                <CheckProudctTableBody />
                <ProductDetailTableBody cart={productInCart} />
            </div>


            <PriceTableBody product={productInCart} priceAfterDiscount={priceAfterDiscount} saveAfterDiscount={saveAfterDiscount} />

            <ProductQuantity quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={cart} />

            <TotalPriceTableBody totalProductPrice={totalProductPrice} />

            <CartAction />

        </div>
    )
}

export default CartTableBody
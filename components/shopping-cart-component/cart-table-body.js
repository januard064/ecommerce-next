import { useEffect, useState, useContext } from "react"

import CheckProudctTableBody from "./check-proudct-table-body"
import ProductDetailTableBody from "./product-detail-table-body"
import PriceTableBody from "./price-table-body"
import ProductQuantity from "./product-quantity"
import CartAction from "./cart-action"
import TotalPriceTableBody from "./total-price-table-body"

import { ShoppingContext } from "@/store/shopping-context"

import { rupiahCurrency, discountTotal, decimalRatingDigit, discountDecimal } from "../ui-utils"

const CartTableBody = (props) => {

    const { checkOutProduct, setCheckOutProduct, cart } = props

    // const { checkOutProduct, setCheckOutProduct } = useContext(ShoppingContext)

    // product in shopping cart
    const [productInCart, setProductInCart] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [totalOriginalPrice, setTotalOriginalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [orderTotalPrice, setOrderTotalPrice] = useState(0)

    const [isChecked, setIsChecked] = useState(false)

    // quantity for checkout or shop
    const [quantity, setQuantity] = useState(cart.totalShop)
    const [enteredQuantity, setEnteredQuantity] = useState(cart.totalShop)



    const [totalProductPrice, setTotalProductPrice] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://dummyjson.com/products/${cart.productId}`)
            .then((response) => response.json())
            .then((product) => {
                // console.log(product)
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
        // console.log('total', cart.totalShop)

        // console.log('totalProductPrice', priceAfterDiscount * quantity)
        // console.log('TotalOriginalPrice', productInCart.price * quantity)
    }, [productInCart, quantity])


    useEffect(() => {
            const checked = checkOutProduct.some((checked) => checked.shoppingCartId == cart.id)

            setIsChecked(checked)
    }, [checkOutProduct])

    // useEffect(() => {
    //     console.log('checkit', checkOutProduct)
    // }, [checkOutProduct])


    const productReadyToChecked = {
        shoppingCartId: cart.id,
        productId: cart.productId,
        totalShop: quantity,
        totalPrice: totalOriginalPrice,
        totalDiscount: totalDiscount,
    }

    const handleCheckOutCart = (e) => {
        e.preventDefault()
        if (isChecked) {
            console.log('cart is already checked and remove')
            setCheckOutProduct(checkOutProduct.filter((checked) => checked.shoppingCartId !== cart.id))
        } else {
            console.log('add cart to checked')
            setCheckOutProduct((prevChecked) => [...prevChecked, { id: prevChecked.length, ...productReadyToChecked }])

        }
    }






    if (isLoading) {
        return
    }


    return (
        <div className="flex mt-10 pb-10 border-b-2 border-[#EDEDED]">

            <div className="w-[32%] flex" >
                <CheckProudctTableBody isChecked={isChecked} handleCheckOutCart={handleCheckOutCart} />
                <ProductDetailTableBody cart={productInCart} />
            </div>


            <PriceTableBody product={productInCart} priceAfterDiscount={priceAfterDiscount} saveAfterDiscount={saveAfterDiscount} />

            <ProductQuantity quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={cart} isChecked={isChecked}  />

            <TotalPriceTableBody totalProductPrice={totalProductPrice} />

            <CartAction />

        </div>
    )
}

export default CartTableBody
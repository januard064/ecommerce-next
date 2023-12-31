import { useState, useContext, useEffect } from "react"

import { ShoppingContext } from "@/store/shopping-context"

import { ShoppingCartProductsPageRoute } from "@/Consants/RouterConst"

import CartTableHead from "@/components/shopping-cart-component/cart-table-head"
import CartTableBody from "@/components/shopping-cart-component/cart-table-body"
import OrderSummary from "@/components/shopping-cart-component/order-summary"
import BreadCrumb from "@/components/ui-guide-component/breadcrumb"



const ShoppingCart = () => {

    const { shoppingCart, checkoutTransaction, setCheckoutTransaction, routerPath } = useContext(ShoppingContext)

    const TABLE_HEAD = [
        {
            title: 'Products',
            width: '32%'
        },
        {
            title: 'Price',
            width: '24%'
        },
        {
            title: 'Quantity',
            width: '18%'
        },
        {
            title: 'Total',
            width: '20%'
        },
        {
            title: '',
            width: '6%'
        }
    ]

    const [checkOutProduct, setCheckOutProduct] = useState([])

    // useEffect(() => {
    //     /**BreadCrumb Path */
    //     ShoppingCartProductsPageRoute.disable = true
    //     routerPath.push(ShoppingCartProductsPageRoute)
    // }, [])




    return (
        <>
            {/* <BreadCrumb /> */}
            <div className="text-black flex justify-between">
                <div className="w-[76%]">
                    <div className="border-b-2 border-[#EDEDED] pb-3 mb-10 flex items-center">

                        {TABLE_HEAD.map((head) => (
                            <CartTableHead width={head.width}>
                                {head.title}
                            </CartTableHead>
                        ))}
                    </div>

                    {shoppingCart.map((cart) => (
                        <CartTableBody checkOutProduct={checkOutProduct} setCheckOutProduct={setCheckOutProduct} cart={cart} />
                    ))}
                </div>

                <div className="w-[calc(24%-24px)]">
                    <OrderSummary checkOutProduct={checkOutProduct} checkoutTransaction={checkoutTransaction} setCheckoutTransaction={setCheckoutTransaction} />
                </div>

            </div>
        </>
    )
}

export default ShoppingCart
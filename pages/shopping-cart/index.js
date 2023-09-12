import { CART_PRODUCTS } from "../dump-data"

import { rupiahCurrency, discountTotal, decimalRatingDigit, discountDecimal } from "@/components/ui-utils"

import CartTableHead from "@/components/shopping-cart-component/cart-table-head"
import CheckProudctTableBody from "@/components/shopping-cart-component/check-proudct-table-body"
import ProductDetailTableBody from "@/components/shopping-cart-component/product-detail-table-body"
import PriceTableBody from "@/components/shopping-cart-component/price-table-body"
import ProductQuantity from "@/components/shopping-cart-component/product-quantity"
import CartAction from "@/components/shopping-cart-component/cart-action"
import TotalPriceTableBody from "@/components/shopping-cart-component/total-price-table-body"

import OrderSummary from "@/components/shopping-cart-component/order-summary"

const ShoppingCart = () => {

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


    return (
        <div className="text-black flex justify-between">
            <div className="w-[76%]">
                <div className="border-b-2 border-[#EDEDED] pb-3 mb-10 flex items-center">

                    {TABLE_HEAD.map((head) => (
                        <CartTableHead width={head.width}>
                            {head.title}
                        </CartTableHead>
                    ))}
                </div>

                {CART_PRODUCTS.map((cart) => (
                    <div className="flex mt-10 pb-10 border-b-2 border-[#EDEDED]">

                        <div className="w-[32%] flex">
                            <CheckProudctTableBody />
                            <ProductDetailTableBody cart={cart} />
                        </div>


                        <PriceTableBody product={cart} />

                        <ProductQuantity product={cart} />

                        <TotalPriceTableBody product={cart} />

                        <CartAction />

                    </div>
                ))}
            </div>

            <div className="w-[calc(24%-24px)]">
                <OrderSummary />
            </div>

        </div>
    )
}

export default ShoppingCart
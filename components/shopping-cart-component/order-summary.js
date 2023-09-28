import { useContext, useEffect, useState } from "react"

import { useRouter } from "next/router"

import Button from "../ui-guide-component/button"
import { rupiahCurrency } from "../ui-utils"

import moment from "moment"
import CHECKOUT_STATUS from "@/data-connector/constants/checkout-constants"

import { ShoppingContext } from "@/store/shopping-context"

import CheckoutTransaction from "@/data-connector/classes/checkout-product"

import { ROUTER_CONST } from "@/Consants/RouterConst"

const OrderSummary = (props) => {

    const router = useRouter()

    // const { checkOutProduct } = useContext(ShoppingContext)
    const { checkOutProduct } = props
    const { checkoutTransaction, setCheckoutTransaction } = useContext(ShoppingContext)

    const [checkoutOrigialPrice, setCheckoutOriginalPrice] = useState(0)
    const [checkOutDiscount, setCheckoutDiscout] = useState(0)

    useEffect(() => {


        let sumOriginalPrice = 0
        let sumDiscount = 0

        if (checkOutProduct.length > 0) {
            checkOutProduct.forEach(checkedProd => {

                sumOriginalPrice += checkedProd.totalPrice
                sumDiscount += checkedProd.totalDiscount

                setCheckoutOriginalPrice(sumOriginalPrice)
                setCheckoutDiscout(sumDiscount)
            });
        } else {
            setCheckoutOriginalPrice(0)
            setCheckoutDiscout(0)
        }


    }, [checkOutProduct])

    const orderedTotalPrice = checkoutOrigialPrice - checkOutDiscount


    const checkoutNow = () => {

        const newTransaction = new CheckoutTransaction()

        // newTransaction.id = checkoutTransaction.length + 1

        newTransaction.items = checkOutProduct

        setCheckoutTransaction(newTransaction)

        router.push(ROUTER_CONST.checkoutTransaction)

    }



    return (
        <div className="w-[100%] border-2 border-[#EDEDED] p-3">
            <div style={{ fontFamily: 'Poppins-SemiBold' }} className="border-b-2 border-[#EDEDED] py-4 text-[18px]">
                <p>Order Summary</p>
            </div>
            <div style={{ fontFamily: 'Poppins-Regular' }} className="text-sm mt-4 border-b-2 border-[#EDEDED] pb-4">
                <div className="flex justify-between">
                    <div>
                        <p>Total Price </p>
                        <p>  {`${checkOutProduct.length} Items`}  </p>
                    </div>
                    <p>{rupiahCurrency(checkoutOrigialPrice)}</p>
                </div>
                <div className="flex justify-between mt-2 items-end">
                    <p>Total <br /> Discount </p>
                    <p>-{rupiahCurrency(checkOutDiscount)}</p>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p style={{ fontFamily: 'Poppins-SemiBold' }} >Total Price</p>
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-sm">{rupiahCurrency(orderedTotalPrice)}</p>
            </div>

            <div className="flex justify-center mt-8">
                <Button type={'primary'} text={'Shop Now'} onClick={checkoutNow} />
            </div>

        </div>
    )
}

export default OrderSummary
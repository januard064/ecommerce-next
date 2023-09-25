import { useContext, useEffect, useState } from "react"

import Button from "../ui-guide-component/button"
import { rupiahCurrency } from "../ui-utils"

import moment from "moment"
import CHECKOUT_STATUS from "@/data-connector/constants/checkout-constants"

import { ShoppingContext } from "@/store/shopping-context"

import CheckoutTransaction from "@/data-connector/classes/checkout-product"

const OrderSummary = (props) => {


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

                sumOriginalPrice += checkedProd.price
                sumDiscount += checkedProd.discount

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

        const newTransaction = new CheckoutTransaction(checkoutTransaction.length)

        newTransaction.checkoutTime = moment('2023-09-23T08:00:00+07:00')
        newTransaction.checkoutStatus = CHECKOUT_STATUS.NEW
        newTransaction.paidTime = moment('2023-09-23T10:00:00+07:00')
        newTransaction.shippingStart = moment('2023-09-24T10:00:00+07:00')
        newTransaction.eta = moment('2023-09-25T10:00:00+07:00')
        newTransaction.shippingEnd = moment('2023-09-25T10:00:00+07:00')
        newTransaction.address = ''
        newTransaction.paymentMethod = ''

        newTransaction.items = checkoutTransaction

        setCheckoutTransaction((prevState) => ([...prevState, newTransaction]))



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
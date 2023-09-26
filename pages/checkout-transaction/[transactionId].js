import { useEffect, useContext, useState } from "react"

import { useRouter } from "next/router"
import { COLOR } from "@/Consants/Color"

import moment from "moment"

import CHECKOUT_STATUS from "@/data-connector/constants/checkout-constants"

import { ShoppingContext } from "@/store/shopping-context"

import PersonalInformation from "@/components/checkout-transactions/personal-information"
import PaymentMethod from "@/components/checkout-transactions/payment-method"

import SubtitleSeparator from "@/components/ui-guide-component/subtitle-separator"
import OrderSummary from "@/components/checkout-transactions/order-summary"

import ShippingAddress from "@/components/checkout-transactions/shipping-address"
import ShippingMethod from "@/components/checkout-transactions/shipping-method"

import Button from "@/components/ui-guide-component/button"

import { getDumpTransaction } from "../dump-data"

const CheckoutTransactions = (props) => {

    const router = useRouter()

    const checkoutedDatas = getDumpTransaction()

    const { checkoutTransaction } = useContext(ShoppingContext)


    const [transaction, setTransaction] = useState()

    const initValue = {
        firstName: "",
        lastName: "",
        phone: "",
        addressLabel: "",
        city: "",
        postCode: "",
        address: ""
    }

    const [shippingAdress, setShippingAddress] = useState({})


    useEffect(() => {
        // const tempTransaction = checkoutTransaction.find((trans) => trans.id == 0)

        const tempTransaction = checkoutTransaction.find((trans) => trans.id == router.query.transactionId)

        setTransaction(tempTransaction)
    }, [])

    useEffect(() => {
        console.log('transaction', transaction)
    }, [transaction])

    const buyNow = () => {

        setTransaction({
            ...transaction,
            checkoutTime: moment('2023-09-23T08:00:00+07:00'),
            checkoutStatus: CHECKOUT_STATUS.NEW,
            paidTime: moment('2023-09-23T10:00:00+07:00'),
            shippingStart: moment('2023-09-24T10:00:00+07:00'),
            eta: moment('2023-09-25T10:00:00+07:00'),
            shippingEnd: moment('2023-09-25T10:00:00+07:00')
        })

    }


    if (!transaction) {
        return
    }

    return (
        <div className={`relative`}>
            <div className={`grid grid-cols-12 gap-4 relative`}>
                <div className={`col-span-7`}>
                    <div>
                        <SubtitleSeparator title={"Address"} />
                        <PersonalInformation shippingAdress={shippingAdress} setShippingAddress={setShippingAddress} transaction={transaction} setTransaction={setTransaction} />
                    </div>
                    <div id={"shipping-address"} className={`mt-10  scroll-mt-[110px]`}>
                        <SubtitleSeparator title={"Shipping Address"} />
                        <ShippingAddress shippingAdress={shippingAdress} />
                    </div>
                    <div id={"shipping-method"} className={`mt-10`}>
                        <SubtitleSeparator title={"Shipping Method"} />
                        <ShippingMethod checkoutedDatas={transaction} />
                    </div>
                    <div id={"payment-method"} className={`mt-10 scroll-mt-[110px]`}>
                        <SubtitleSeparator title={"Payment Method"} />
                        <PaymentMethod transaction={transaction} setTransaction={setTransaction} />
                    </div>
                    <div className={`flex justify-end mt-6`}>
                        <Button type={"primary"} text={"Buy Now"} onClick={buyNow} />
                    </div>
                </div>
                {transaction && (<OrderSummary checkoutedDatas={transaction} />)}
                {/* <OrderSummary checkoutedDatas={checkoutedDatas} /> */}
            </div>

        </div>
    )
}

export default CheckoutTransactions
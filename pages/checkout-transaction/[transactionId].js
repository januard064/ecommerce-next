import { useEffect, useContext, useState } from "react"

import { useRouter } from "next/router"
import { COLOR } from "@/Consants/Color"

import { ShoppingContext } from "@/store/shopping-context"

import PersonalInformation from "@/components/checkout-transactions/personal-information"
import PaymentMethod from "@/components/checkout-transactions/payment-method"

import SubtitleSeparator from "@/components/ui-guide-component/subtitle-separator"
import OrderSummary from "@/components/checkout-transactions/order-summary"

import ShippingAddress from "@/components/checkout-transactions/shipping-address"
import ShippingMethod from "@/components/checkout-transactions/shipping-method"

import { getDumpTransaction } from "../dump-data"

const CheckoutTransaction = (props) => {

    const router = useRouter()

    const checkoutedDatas = getDumpTransaction()

    const { checkoutTransaction } = useContext(ShoppingContext)


    const [transaction, setTransaction] = useState()

    const [shippingAdress, setShippingAddress] = useState({})


    useEffect(() => {
        const tempTransaction = checkoutTransaction.find((trans) => trans.id == 0)

        // const tempTransaction = checkoutTransaction.find((trans) => trans.id == router.query.transactionId)

        setTransaction(tempTransaction)
        console.log('tempTrans', tempTransaction)
    }, [])


    if (!transaction) {
        return
    }

    return (
        <div className={`relative`}>
            <div className={`grid grid-cols-12 gap-4 relative`}>
                <div className={`col-span-7`}>
                    <div>
                        <SubtitleSeparator title={"Address"} />
                        <PersonalInformation shippingAdress={shippingAdress} setShippingAddress={setShippingAddress} />
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
                        <PaymentMethod />
                    </div>
                </div>
                {transaction && (<OrderSummary checkoutedDatas={transaction} />)}
                {/* <OrderSummary checkoutedDatas={checkoutedDatas} /> */}
            </div>

        </div>
    )
}

export default CheckoutTransaction
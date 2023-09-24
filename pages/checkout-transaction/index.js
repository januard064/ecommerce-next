import { COLOR } from "@/Consants/Color"

import PersonalInformation from "@/components/checkout-transactions/personal-information"
import PaymentMethod from "@/components/checkout-transactions/payment-method"

import SubtitleSeparator from "@/components/ui-guide-component/subtitle-separator"
import OrderSummary from "@/components/checkout-transactions/order-summary"

import ShippingAddress from "@/components/checkout-transactions/shipping-address"
import ShippingMethod from "@/components/checkout-transactions/shipping-method"

import { getDumpTransaction } from "../dump-data"

const Checkout = (props) => {

    const checkoutedDatas = getDumpTransaction()

    return (
        <div className={`relative`}>
            <div className={`grid grid-cols-12 gap-4 relative`}>
                <div className={`col-span-7`}>
                    <div>
                        <SubtitleSeparator title={"Address"} />
                        <PersonalInformation />
                    </div>
                    <div id={"shipping-address"} className={`mt-10  scroll-mt-[110px]`}>
                        <SubtitleSeparator title={"Shipping Address"} />
                        <ShippingAddress />
                    </div>
                    <div id={"shipping-method"} className={`mt-10`}>
                        <SubtitleSeparator title={"Shipping Method"} />
                        <ShippingMethod />
                    </div>
                    <div id={"payment-method"} className={`mt-10 scroll-mt-[110px]`}>
                        <SubtitleSeparator title={"Payment Method"} />
                        <PaymentMethod />
                    </div>
                </div>
                <OrderSummary checkoutedDatas={checkoutedDatas} />
            </div>

        </div>
    )
}

export default Checkout
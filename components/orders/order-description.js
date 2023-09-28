import { useEffect } from "react"

import { FONT_FAMILY } from "@/Consants/FontFamily"

import moment from "moment"
import { getTenantPayment } from "@/data-connector/payment-tenant"
import { getCheckoutStatusText } from "@/data-connector/constants/checkout-constants"

import { rupiahCurrency } from "../ui-utils"

const DescriptionTable = (props) => {

    const { head, body } = props

    return (
        <div className={`flex items-center text-sm text-[#807D7E]`}>
            <p style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} >{head}</p>  &nbsp;:&nbsp;
            <p style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }} className={``}>{body}</p>
        </div>
    )
}

const OrderDescription = (props) => {

    const { order } = props

    useEffect(() => {
        console.log('order', order)
    }, [])

    return (
        <div>
            <div className={`mt-10`}>
                <div className={`h-[135px] w-full bg-[#F6F6F6] px-12 py-7 rounded-lg`}>

                    <p style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className="text-black text-[#3C4242]">Order no: #{order.id + 1}</p>

                    <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className={`flex justify-between mt-4`}>
                        <div>
                            <DescriptionTable head={'Order Date'} body={moment(order.checkoutTime).format('DD MMM YYYY, h:mm a')} />
                            <DescriptionTable head={`Estimated Delivery Date`} body={moment(order.checkoutTime).format('DD MMM YYYY')} />
                        </div>

                        <div>
                            <DescriptionTable head={'Order Status'} body={getCheckoutStatusText(order.checkoutStatus)} />
                            <DescriptionTable head={'Payment Method'} body={getTenantPayment(order.paymentMethod).name} />
                        </div>

                        <div className="full flex items-center">
                            <DescriptionTable head={'Total'} body={rupiahCurrency(order.totalBill)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderDescription
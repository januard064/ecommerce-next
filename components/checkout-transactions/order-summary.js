import { COLOR } from "@/Consants/Color"
import { FONT_FAMILY } from "@/Consants/FontFamily"

import ProductSummary from "./product-summary"
import { useEffect, useState } from "react"

import { rupiahCurrency } from "../ui-utils"

const OrderSummary = (props) => {

    const { checkoutedDatas, isInOrderHistory = false, totalBill, setTotalBill } = props


    const [checkoutOrigialPrice, setCheckoutOriginalPrice] = useState(0)
    const [checkOutDiscount, setCheckoutDiscout] = useState(0)

    useEffect(() => {


        let sumOriginalPrice = 0
        let sumDiscount = 0

        if (checkoutedDatas.items.length > 0) {
            checkoutedDatas.items.forEach(checkedProd => {

                sumOriginalPrice += checkedProd.totalPrice
                sumDiscount += checkedProd.totalDiscount

                setCheckoutOriginalPrice(sumOriginalPrice)
                setCheckoutDiscout(sumDiscount)
            });
        } else {
            setCheckoutOriginalPrice(0)
            setCheckoutDiscout(0)
        }

        console.log('checkoutdatas', checkoutedDatas)

    }, [checkoutedDatas])

    useEffect(() => {
        if (!isInOrderHistory) {
            let totalCost = ((checkoutOrigialPrice - checkOutDiscount) + checkoutedDatas.deliveryCharges)

            setTotalBill(totalCost)
        }


    }, [checkOutDiscount, checkoutOrigialPrice])


    if (isInOrderHistory) {
        return (
            <div className={`text-black text-sm`}>
                {checkoutedDatas.items.map((checkoutedProduct) => (
                    <ProductSummary checkoutedDatas={checkoutedDatas} checkoutedProduct={checkoutedProduct} isInOrderHistory={isInOrderHistory} />
                ))}
            </div>
        )
    }

    return (
        <div className={`col-span-5 w-[100%] h-fit border-2 border-[${COLOR.GREEN[0]}] p-4 sticky top-[110px] text-black text-sm`}>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className="border-b-2 border-[#EDEDED] py-4 text-[18px]">
                <p>Order Summary</p>
            </div>
            {checkoutedDatas.items.map((checkoutedProduct) => (
                <ProductSummary checkoutedDatas={checkoutedDatas} checkoutedProduct={checkoutedProduct} />
            ))}
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className={`border-b-[1px] border-[#EDEDED]`}>
                <div className={`flex justify-between mt-4`}>
                    <p>{`Subtotal (${checkoutedDatas.items.length} items)`}</p>
                    <p>{rupiahCurrency(checkoutOrigialPrice)}</p>
                </div>
                <div className={`flex justify-between mt-2 mb-4`}>
                    <p>{`Savings`}</p>
                    <p>-{rupiahCurrency(checkOutDiscount)}</p>
                </div>
            </div>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className={`border-b-[1px] border-[#EDEDED]`}>
                <div className={`flex justify-between my-4`}>
                    <p>{`Shipping`}</p>
                    <p>{rupiahCurrency(checkoutedDatas.deliveryCharges)}</p>
                </div>
            </div>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }}>
                <div className={`flex justify-between my-4`}>
                    <p>{`Total`}</p>
                    <p>{rupiahCurrency(totalBill)}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
import { COLOR } from "@/Consants/Color"
import { FONT_FAMILY } from "@/Consants/FontFamily"

import ProductSummary from "./product-summary"

const OrderSummary = (props) => {

    const { checkoutedDatas } = props

    return (
        <div className={`col-span-5 w-[100%] h-fit border-2 border-[${COLOR.GREEN[0]}] p-4 sticky top-[110px] text-black`}>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className="border-b-2 border-[#EDEDED] py-4 text-[18px]">
                <p>Order Summary</p>
            </div>
            {checkoutedDatas.items.map((checkoutedProduct) => (
                <ProductSummary checkoutedDatas={checkoutedDatas} checkoutedProduct={checkoutedProduct} />
            ))}
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className={`border-b-[1px] border-[#EDEDED]`}>
                <div className={`flex justify-between mt-4`}>
                    <p>{`Subtotal (${checkoutedDatas.items.length} items)`}</p>
                </div>
                <div className={`flex justify-between mt-2 mb-4`}>
                    <p>{`Savings`}</p>
                </div>
            </div>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className={`border-b-[1px] border-[#EDEDED]`}>
                <div className={`flex justify-between my-4`}>
                    <p>{`Shipping`}</p>
                </div>
            </div>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }}>
                <div className={`flex justify-between my-4`}>
                    <p>{`Total`}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
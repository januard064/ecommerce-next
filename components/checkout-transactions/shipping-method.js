import { FONT_FAMILY } from "@/Consants/FontFamily"
import { rupiahCurrency } from "../ui-utils"

const ShippingMethod = (props) => {

    const { checkoutedDatas } = props

    return (
        <div className={`bg-[#F6F6F6] w-[100%] h-fit rounded-xl text-black p-4  overflow-y-auto`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            <div className={` border-b-[1px] border-[#BEBCBD]`}>
                <div className={`mb-4`}>
                    <p>Arrives by</p>
                </div>
            </div>
            <div className={`mt-4 flex justify-between  w-[100%] text-sm`}>
                <p>Delivery Charges</p>
                <p>{rupiahCurrency(checkoutedDatas.deliveryCharges)}</p>
            </div>
        </div>
    )
}

export default ShippingMethod
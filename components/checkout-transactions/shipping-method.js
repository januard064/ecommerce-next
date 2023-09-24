import { FONT_FAMILY } from "@/Consants/FontFamily"

const ShippingMethod = (props) => {



    return (
        <div className={`bg-[#F6F6F6] w-[100%] h-fit rounded-xl text-black p-4  overflow-y-auto`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            <div className={` border-b-[1px] border-[#BEBCBD]`}>
                <div className={`mb-4`}>
                    <p>Arrives by</p>
                </div>
            </div>
            <div className={`mt-4 flex justify-between  w-[100%] text-sm`}>
                <p>Delivery Charges</p>
                <p>{20}</p>
            </div>
        </div>
    )
}

export default ShippingMethod
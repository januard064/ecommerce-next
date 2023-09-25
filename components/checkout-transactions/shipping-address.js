import { FONT_FAMILY } from "@/Consants/FontFamily"

const ShippingAddress = (props) => {

    const { shippingAdress } = props

    return (
        <div className={`bg-[#F6F6F6] w-[100%] min-h-[100px] max-h-[300px] rounded-xl text-black p-4  overflow-y-auto text-sm`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            {shippingAdress ? (
                <div>
                    <div className={`p-1 px-2 bg-[#666666] w-fit mb-1 rounded-md text-white`}>
                        {shippingAdress.addressLabel}
                    </div>
                    <p>{shippingAdress.firstName} {shippingAdress.lastName}</p>
                    <p>({shippingAdress.phone})</p>
                    <p>{shippingAdress.address} {shippingAdress.city},{shippingAdress.postCode}</p>
                </div>

            ) : (
                <p className={`text-[#BEBCBD]`}>No address saved</p>
            )}
        </div>
    )
}

export default ShippingAddress
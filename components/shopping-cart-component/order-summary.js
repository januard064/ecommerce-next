import Button from "../ui-guide-component/button"
import { rupiahCurrency } from "../ui-utils"

const OrderSummary = (props) => {

    const { totalOriginalPrice, totalDiscount, orderTotalPrice } = props

    return (
        <div className="w-[100%] border-2 border-[#EDEDED] p-3">
            <div style={{ fontFamily: 'Poppins-SemiBold' }} className="border-b-2 border-[#EDEDED] py-4 text-[18px]">
                <p>Order Summary</p>
            </div>
            <div style={{ fontFamily: 'Poppins-Regular' }} className="text-sm mt-4 border-b-2 border-[#EDEDED] pb-4">
                <div className="flex justify-between">
                    <div>
                        <p>Total Price </p>
                        <p>  (3 Items)  </p>
                    </div>
                    <p>{rupiahCurrency(totalOriginalPrice)}</p>
                </div>
                <div className="flex justify-between mt-2 items-end">
                    <p>Total <br /> Discount </p>
                    <p>-{rupiahCurrency(totalDiscount)}</p>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p style={{ fontFamily: 'Poppins-SemiBold' }} >Total Price</p>
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-sm">{rupiahCurrency(orderTotalPrice)}</p>
            </div>

            <div className="flex justify-center mt-8">
                <Button type={'primary'} text={'Shop Now'} />
            </div>

        </div>
    )
}

export default OrderSummary
import { useContext, useEffect, useState } from "react"

import Button from "../ui-guide-component/button"
import { rupiahCurrency } from "../ui-utils"

import { ShoppingContext } from "@/store/shopping-context"

const OrderSummary = (props) => {


    const { checkOutProduct } = useContext(ShoppingContext)

    const [checkoutOrigialPrice, setCheckoutOriginalPrice] = useState(0)
    const [checkOutDiscount, setCheckoutDiscout] = useState(0)

    useEffect(() => {


        let sumOriginalPrice = 0
        let sumDiscount = 0

        if(checkOutProduct.length > 0){
            checkOutProduct.forEach(checkedProd => {

                sumOriginalPrice+=checkedProd.price
                sumDiscount+=checkedProd.discount
    
                setCheckoutOriginalPrice(sumOriginalPrice)
                setCheckoutDiscout(sumDiscount)
            });
        } else{
            setCheckoutOriginalPrice(0)
            setCheckoutDiscout(0)
        }

      
    }, [checkOutProduct])

    const orderedTotalPrice = checkoutOrigialPrice - checkOutDiscount

    return (
        <div className="w-[100%] border-2 border-[#EDEDED] p-3">
            <div style={{ fontFamily: 'Poppins-SemiBold' }} className="border-b-2 border-[#EDEDED] py-4 text-[18px]">
                <p>Order Summary</p>
            </div>
            <div style={{ fontFamily: 'Poppins-Regular' }} className="text-sm mt-4 border-b-2 border-[#EDEDED] pb-4">
                <div className="flex justify-between">
                    <div>
                        <p>Total Price </p>
                        <p>  {`${checkOutProduct.length} Items`}  </p>
                    </div>
                    <p>{rupiahCurrency(checkoutOrigialPrice)}</p>
                </div>
                <div className="flex justify-between mt-2 items-end">
                    <p>Total <br /> Discount </p>
                    <p>-{rupiahCurrency(checkOutDiscount)}</p>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p style={{ fontFamily: 'Poppins-SemiBold' }} >Total Price</p>
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-sm">{rupiahCurrency(orderedTotalPrice)}</p>
            </div>

            <div className="flex justify-center mt-8">
                <Button type={'primary'} text={'Shop Now'} />
            </div>

        </div>
    )
}

export default OrderSummary
import { useState } from 'react'

import { FONT_FAMILY } from '@/Consants/FontFamily'
import Button from '../ui-guide-component/button'

import { PAYMENT_METHOD } from '@/data-connector/payment-tenant'

const PaymentMethod = (props) => {

    const { paymentMethod, setPaymentMethod } = props

    // const [paymentMethod, setPaymentMethod] = useState()

    const handleSetPaymentMethod = (id) => {
        setPaymentMethod(id)

    }


    return (
        <>
            <div className={`bg-[#F6F6F6] w-[100%] max-h-[300px] rounded-xl text-black px-4  overflow-y-auto`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
                {PAYMENT_METHOD.map((method, index) => (
                    <div
                        className={`${(index == PAYMENT_METHOD.length - 1) ? 'border-0' : 'border-b-[1px]'}  border-[#BEBCBD] h-[60px] flex items-center cursor-pointer `}
                        onClick={() => handleSetPaymentMethod(method.id)}
                    >
                        <div className={`${method.id == paymentMethod ? 'bg-white' : ''}  pl-2  flex items-center  h-[85%] w-full`}>
                            <p>{method.name}</p>
                            <div className='text-xs ml-3 h-[50%] flex items-end'>
                                <p>{`(Virtual Accout : ${method.va})`}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </>
    )
}

export default PaymentMethod
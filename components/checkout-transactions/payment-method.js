import { Disclosure } from '@headlessui/react'
import ArrowRightCircle from '../icons/arrow-right-circle'
import { FONT_FAMILY } from '@/Consants/FontFamily'
import Button from '../ui-guide-component/button'

const PaymentMethod = (props) => {

    // const PAYMENT_METHOD = [
    //     {
    //         method: 'Credit Card',
    //         paymentTenant: [
    //             {
    //                 icon: '',
    //                 name: 'Credit A',
    //                 action: () => { }
    //             }
    //         ]
    //     },
    //     {
    //         method: 'Transfer Bank',
    //         paymentTenant: [
    //             {
    //                 icon: '',
    //                 name: 'Bank A',
    //                 action: () => { }
    //             },
    //             {
    //                 icon: '',
    //                 name: 'Bank B',
    //                 action: () => { }
    //             },
    //             {
    //                 icon: '',
    //                 name: 'Bank C',
    //                 action: () => { }
    //             }
    //         ]
    //     },
    //     {
    //         method: 'Virtual Account',
    //         paymentTenant: [
    //             {
    //                 icon: '',
    //                 name: 'Bank A',
    //                 action: () => { }
    //             },
    //             {
    //                 icon: '',
    //                 name: 'Bank B',
    //                 action: () => { }
    //             },
    //             {
    //                 icon: '',
    //                 name: 'Bank C',
    //                 action: () => { }
    //             }
    //         ]
    //     },

    // ]

    const PAYMENT_METHOD = [
        {
            icon: '',
            name: 'Bank A',
            action: () => { }
        },
        {
            icon: '',
            name: 'Bank B',
            action: () => { }
        },
        {
            icon: '',
            name: 'Bank C',
            action: () => { }
        },
        {
            icon: '',
            name: 'Bank D',
            action: () => { }
        },
        {
            icon: '',
            name: 'Bank E',
            action: () => { }
        },
        {
            icon: '',
            name: 'Bank F',
            action: () => { }
        }
    ]

    return (
        <>
            <div className={`bg-[#F6F6F6] w-[100%] max-h-[500px] rounded-xl text-black px-4  overflow-y-auto`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
                {PAYMENT_METHOD.map((method, index) => (
                    <div className={`${(index == PAYMENT_METHOD.length - 1) ? 'border-0' : 'border-b-[1px]'} border-[#BEBCBD] h-[60px] flex items-center px-4 cursor-pointer`}>
                        <p>{method.name}</p>
                    </div>
                ))
                }
            </div >
            <div className={`flex justify-end mt-6`}>
                <Button type={"primary"} text={"Pay Now"} />
            </div>
        </>
    )
}

export default PaymentMethod
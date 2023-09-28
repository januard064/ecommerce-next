import { useEffect, useState, useContext } from "react"

import { ShoppingContext } from "@/store/shopping-context"

import CHECKOUT_STATUS from "@/data-connector/constants/checkout-constants"

import SubtitleSeparator from "@/components/ui-guide-component/subtitle-separator"
import TabPanel from "@/components/ui-guide-component/tab-panel"
import OrderDescription from "@/components/orders/order-description"


import OrderSummary from "@/components/checkout-transactions/order-summary"
import Button from "@/components/ui-guide-component/button"


const ORDER_CATEGORY = [
    {
        id: 0,
        title: 'Active',
        action: () => { }
    },
    {
        id: 1,
        title: 'Canceled',
        action: () => { }
    },
    {
        id: 2,
        title: 'Completed',
        action: () => { }
    }
]

const Orders = () => {

    const { ordersHistory } = useContext(ShoppingContext)

    const [orderCategory, setOrderCategory] = useState(0)

    const [orders, setOrders] = useState([])

    const getCheckoutStatusText = (id) => {

        let checkoutStatusTitle

        switch (id) {
            case 0:
                checkoutStatusTitle = CHECKOUT_STATUS.NEW
                break;
            case 1:
                checkoutStatusTitle = CHECKOUT_STATUS.CANCELED
                break;
            case 2:
                checkoutStatusTitle = CHECKOUT_STATUS.COMPLETED
                break;
            default:
                break;
        }

        return checkoutStatusTitle
    }

    const handleOpenOrderCategory = (id) => {
        setOrderCategory(id)
    }


    useEffect(() => {
        const filteredOrderbyCategory = ordersHistory.filter((trans) => trans.checkoutStatus === getCheckoutStatusText(orderCategory))

        setOrders(filteredOrderbyCategory)
        console.log('filtered', filteredOrderbyCategory)
    }, [orderCategory])




    return (
        <div>
            <SubtitleSeparator title={'My Orders'} />
            <div className={`mt-10`}>
                <TabPanel tabMenu={ORDER_CATEGORY} openTab={orderCategory} handleOpenTab={handleOpenOrderCategory} />
            </div>
            <div className={`text-black`}>
                {orders.length > 0 ? (
                    <div className={""}>
                        {orders.map((order, index) => (
                            <div className={` ${index == 0 ? '' : `border-b-2 border-[#EDEDED]`}  pb-10`}>
                                <OrderDescription order={order} />
                                <div className={`flex justify-between`}>
                                    <OrderSummary checkoutedDatas={order} isInOrderHistory={true} />
                                    <div className={`min-h-full w-fit pb-3 flex items-end`}>
                                        <Button type={'disabled'} text={`View Detail`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <p className="text-black">{orders[0].items.length}</p> */}
                    </div>
                ) : (
                    <div className={`w-full h-40 items-center flex justify-center`}>
                        <p className={`text-[#BEBCBD]`}>{`There is no ${getCheckoutStatusText(orderCategory)} order yet`}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Orders
import { useState } from "react"

import { FONT_FAMILY } from "@/Consants/FontFamily"

// const ORDER_MENU = [
//     {
//         id: 0,
//         title: 'Active',
//         action: () => { }
//     },
//     {
//         id: 1,
//         title: 'Canceled',
//         action: () => { }
//     },
//     {
//         id: 2,
//         title: 'Completed',
//         action: () => { }
//     }
// ]



const TabPanel = (props) => {

    const { tabMenu, openTab, handleOpenTab } = props

    const [activeTab, setActiveTab] = useState(openTab)

    const handleActiveTab = (id) => {
        setActiveTab(id)
        handleOpenTab(id)
    }


    return (
        <div>

            <div className={`flex justify-between border-b-2 border-[#F6F6F6]`}>
                {tabMenu.map((orderMenu) => (
                    <div key={orderMenu.id} className=
                        {`h-11 px-11 text-black flex items-center cursor-pointer rounded-t-lg mb-[-1.5px]
                        hover:bg-[#F3F9FB]
                        ${orderMenu.id == activeTab ? 'bg-[#F6F6F6] border-b-2 border-[#3C4242] shadow-sm shadow-black' : ''}
                        `}
                        onClick={() => handleActiveTab(orderMenu.id)}
                        style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }}
                    >
                        {orderMenu.title}
                    </div>
                ))}

            </div>
        </div>
    )
}


export default TabPanel
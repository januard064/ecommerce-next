import { useState, useRef } from "react"

import PlusIcon from "../icons/plus-icon"
import MinusIcon from "../icons/minus-icon"

const QuantityChip = (props) => {

    const { quantity, addQuantity, minQuantity, typeQuantity, reachMax, reachMin } = props

    return (
        <div className="h-14 border-[1px] border-[#008ECC] w-fit flex items-center rounded-[8px] px-3">
            <div onClick={addQuantity} className="cursor-pointer">
                <PlusIcon reachMax={reachMax} />
            </div>
            <div>
                <input
                    className="w-10 bg-[#FFFFFF] text-center hover:outline-none focus:outline-none"
                    value={quantity} onChange={(e) => typeQuantity(e)}
                />
            </div>
            <div onClick={minQuantity} className="cursor-pointer" >
                <MinusIcon reachMin={reachMin} />
            </div>
        </div>
    )
}

export default QuantityChip
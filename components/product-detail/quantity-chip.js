import { useState, useRef, useEffect } from "react"

import PlusIcon from "../icons/plus-icon"
import MinusIcon from "../icons/minus-icon"

const QuantityChip = (props) => {

    const { product, cart } = props

    // quantity for checkout or shop
    const [quantity, setQuantity] = useState(1)
    const [enteredQuantity, setEnteredQuantity] = useState(1)

    // reach max and min  quantity
    const [reachMin, setReachMin] = useState(true)
    const [reachMax, setReachMax] = useState(false)

    const addQuantity = () => {
        if (quantity >= product.stock) {
            setQuantity(product.stock)
        } else {
            setQuantity((prevQuantity) => prevQuantity + 1)
        }
    }

    const reduceQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity((prevQuantity) => prevQuantity - 1)
        }
    }

    const typeQuantity = (e) => {
        setEnteredQuantity(e.target.value)
    }

    useEffect(() => {
        if (enteredQuantity >= product.stock) {
            setQuantity(product.stock)
        } else if (enteredQuantity <= 0) {
            setQuantity(1)
        }
        else {
            setQuantity(parseFloat(enteredQuantity))
        }
    }, [enteredQuantity])

    useEffect(() => {
        if (quantity <= 1) {
            setReachMin(true)
        } else if (quantity >= product.stock) {
            setReachMax(true)
        } else {
            setReachMax(false)
            setReachMin(false)
        }
    }, [quantity])

    return (
        <div className={`${cart ? 'h-10' : 'h-14'} border-[1px] border-[#008ECC] w-fit flex items-center rounded-[8px] px-3`}>
            <div onClick={reduceQuantity} className="cursor-pointer" >
                <MinusIcon reachMin={reachMin} />
            </div>
            <div>
                <input
                    className="w-10 bg-[#FFFFFF] text-center hover:outline-none focus:outline-none"
                    value={quantity} onChange={(e) => typeQuantity(e)}
                />
            </div>
            <div onClick={addQuantity} className="cursor-pointer">
                <PlusIcon reachMax={reachMax} />
            </div>
        </div>
    )
}

export default QuantityChip
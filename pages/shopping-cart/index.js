import { CART_PRODUCTS } from "../dump-data"

import Image from "next/image"
import { rupiahCurrency, discountTotal, decimalRatingDigit, discountDecimal } from "@/components/ui-utils"
import QuantityChip from "@/components/product-detail/quantity-chip"

import CartIcon from "@/components/icons/cart-icon"

const TableHead = (props) => {

    const { width, children } = props

    return (
        <div className={`w-[${width}]`}>
            <p style={{ fontFamily: 'Poppins-SemiBold' }} className="text-[18px]">{children}</p>
        </div>
    )

}

const PriceTableBody = (props) => {

    const { product } = props

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)
    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)

    return (
        <div className="flex items-center h-[60px]">
            {product.discountPercentage > 0 ?
                (
                    <div className="mt-1">
                        <div className="flex items-center">
                            <div className="bg-[#008ECC] p-1 rounded-[6px] text-white">
                                <p>{discountDecimal(product.discountPercentage)}%</p>
                            </div>
                            <p className="line-through ml-2 text-xs">
                                {rupiahCurrency(product.price)}
                            </p>
                        </div>
                        <p style={{ fontFamily: 'Poppins-SemiBold' }}>
                            {rupiahCurrency(priceAfterDiscount)}
                        </p>
                    </div>
                ) : (
                    <p style={{ fontFamily: 'Poppins-Regular' }} className="mt-1">
                        {rupiahCurrency(product.price)}
                    </p>
                )
            }
        </div>
    )
}

const TotalTableBody = (props) => {

    return (
        <div className="flex items-center h-[60px]">
            {props.children}
        </div>
    )
}

const ShoppingCart = () => {

    const TABLE_HEAD = [
        {
            title: 'Products',
            width: '32%'
        },
        {
            title: 'Price',
            width: '20%'
        },
        {
            title: 'Quantity',
            width: '18%'
        },
        {
            title: 'Total',
            width: '20%'
        },
        {
            title: '',
            width: '10%'
        }
    ]


    return (
        <div className="text-black flex justify-between">
            <div className="w-[78%]">
                <div className="border-b-2 border-[#EDEDED] pb-3 mb-10 flex items-center">

                    {TABLE_HEAD.map((head) => (
                        <TableHead width={head.width}>
                            {head.title}
                        </TableHead>
                    ))}
                </div>

                {CART_PRODUCTS.map((cart) => (
                    <div className="flex mt-10 pb-10 border-b-2 border-[#EDEDED]">
                        <div className="w-[32%] flex">
                            <div className="w-[10%]">
                                <input type="checkbox" />
                            </div>
                            <div className="w-[90%]">
                                <div className="p-1 bg-[#F0F2F2] w-fit mb-1">
                                    <p className="text-sm"> {cart.brand}</p>
                                </div>
                                <p className="text-md mb-1" style={{ fontFamily: 'Poppins-Regular' }}>{cart.title}</p>
                                <div className="w-[140px] h-[140px]">
                                    <Image src={`${cart.thumbnail}`} className="" alt="product-image" style={{
                                        width: '99%',
                                        height: '99%',
                                    }} width={220} height={160} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <PriceTableBody product={cart} />
                        </div>
                        <div className="w-[18%]">
                            <TotalTableBody>
                                <QuantityChip cart={true} />
                            </TotalTableBody>
                        </div>
                        <div className="w-[20%]">
                            <TotalTableBody>
                                {rupiahCurrency(cart.price)}
                            </TotalTableBody>
                        </div>
                        <div className="w-[10%]">
                            <TotalTableBody>
                                <div className="flex">
                                    <CartIcon />
                                    <div className="ml-3">
                                        <CartIcon />
                                    </div>
                                </div>
                            </TotalTableBody>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[21%]">
                <div className="w-[100%] h-[300px] border-2 border-[#EDEDED]">

                </div>
            </div>

        </div>
    )
}

export default ShoppingCart
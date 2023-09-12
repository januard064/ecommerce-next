import { rupiahCurrency, discountTotal, decimalRatingDigit, discountDecimal } from "../ui-utils"

const PriceTableBody = (props) => {

    const { product } = props

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)
    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)

    return (
        <div className="w-[24%]">
            <div className="flex items-center h-[60px]">
                {product.discountPercentage > 0 ?
                    (
                        <div className="mt-1">
                            <div className="flex items-center">
                                <div className="bg-[#008ECC] p-1 rounded-[6px] text-white text-sm px-2">
                                    <p>{discountDecimal(product.discountPercentage)}%</p>
                                </div>
                                <p className="line-through ml-2 text-sm">
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
        </div>
    )
}

export default PriceTableBody
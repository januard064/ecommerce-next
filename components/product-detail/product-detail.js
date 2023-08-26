import Image from "next/image"

// import ui-utils
import { productTitle, discountDecimal, convertToRupiah, rupiahCurrency, discountTotal, decimalRatingDigit } from "../ui-utils"

import StarIcon from "../icons/star-icon"
import HalfStarIcon from "../icons/half-star-icon"

const ProductDetail = (props) => {

    const { product } = props

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)
    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)

    return (
        <div className="flex mt-8">
            <div className="w-[40%] h-[485px]">
                <Image src={`${product.thumbnail}`} width={424} height={590} alt="product-image-thumbnail"
                    style={{ width: '100%', height: '100%' }}
                />

                <div class="flex justify-center mt-8">
                    {product.images.map((img) => (
                        <div className="w-[88px] h-[88px] mx-2 flex justify-center items-center rounded-[8px] border border-[#EDEDED]">
                            <Image src={`${img}`} width={88} height={88} alt="product-image-variant"
                                style={{ width: '95%', height: '95%' }}
                                className="rounded-[8px]"
                            />
                        </div>
                    ))}
                </div>

            </div>
            <div className="ml-9 w-[60%]">
                <div className="p-2 bg-[#F0F2F2] w-fit mb-1">
                    <p> {product.brand}</p>
                </div>
                <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>{product.title}</p>

                <div className="flex justify-start items-center">
                    {Array.apply(null, { length: Math.trunc(product.rating) })
                        .map((index) => (
                            <StarIcon color={'#EDD146'} isDetail={true} />
                        ))}
                    {decimalRatingDigit(product.rating) > 0 && <div className="mt-[1.5px]"> <HalfStarIcon color={'#EDD146'} isDetail={true} /> </div>}

                    <p className="text-[#807D7E] text-lg">({product.rating})</p>
                </div>

                <p className="text-sm mt-2" style={{ fontFamily: 'Poppins-Light' }}>{product.description} </p>

                <hr className="bg-[#EDEDED] my-6" />

                <div className="">
                    {product.discountPercentage > 0 ?
                        (
                            <div className="flex items-end">
                                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[28px]">
                                    {rupiahCurrency(priceAfterDiscount)}
                                </p>
                                <p style={{ fontFamily: 'Poppins-Regular' }} className="line-through ml-3 text-[24px]">
                                    {rupiahCurrency(product.price)}
                                </p>
                            </div>
                        ) : (
                            <p style={{ fontFamily: 'Poppins-Regular' }}>
                                {rupiahCurrency(product.price)}
                            </p>
                        )}
                    
                    {product.discountPercentage > 0 && (
                        <p style={{ fontFamily:'Poppins-Light' }} className="text-[#807D7E] text-sm">Get Our Best Discount {product.discountPercentage}% and Save {rupiahCurrency(saveAfterDiscount)}</p>
                    )}
                </div>

                <hr className="bg-[#EDEDED] my-6" />

            </div>
        </div>
    )

}

export default ProductDetail
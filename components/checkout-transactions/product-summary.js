import { useEffect, useState } from "react"

import Image from "next/image"

import { FONT_FAMILY } from "@/Consants/FontFamily"

import { rupiahCurrency } from "../ui-utils"

import Button from "../ui-guide-component/button"

const DescriptionTable = (props) => {

    const { head, body } = props

    return (
        <div className={`flex items-center text-sm text-black mt-1`}>
            <p style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} >{head}</p>  &nbsp;:&nbsp;
            <p style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }} className={``}>{body}</p>
        </div>
    )
}

const ProductSummary = (props) => {

    const { checkoutedDatas, checkoutedProduct, isInOrderHistory } = props


    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${checkoutedProduct.productId}`)
            .then((response) => response.json())
            .then((checkouted) => {
                setProduct(checkouted)
            })
    }, [])

    if (!product) {
        return
    }


    if (isInOrderHistory) {
        return (
            <div className={`my-4 flex w-fit items-center justify-between`}>
                <div className={`h-[106px] w-[106px]`}>
                    <Image src={product.thumbnail} className="rounded-md" alt="product-iamge"
                        style={{
                            width: '99%',
                            height: '99%',
                        }} width={220} height={160}
                    />
                </div>
                <div className={`ml-6`}>
                    <p style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className="">{product.title}</p>
                    <div className={`p-1 px-3 bg-[#F0F2F2] w-fit mb-1 rounded-md mt-1`}>
                        <p>{product.brand}</p>
                    </div>
                    <DescriptionTable head={`Quality`} body={checkoutedProduct.totalShop} />
                    <DescriptionTable head={`Total`} body={rupiahCurrency(checkoutedProduct.totalPrice - checkoutedProduct.totalDiscount)} />
                </div>
            </div>

        )
    }

    return (
        <div className={`flex text-black border-b-[1px] border-[#EDEDED] text-sm`}>
            <div className={`my-4  flex w-full`}>
                <div className={`h-[80px] w-[80px]`}>
                    <Image src={product.thumbnail} className="rounded-md" alt="product-iamge"
                        style={{
                            width: '99%',
                            height: '99%',
                        }} width={220} height={160}
                    />
                </div>
                <div className="ml-4 py-2.5 w-[calc(100%-104px)]">
                    <div className="flex">
                        <p style={{ fontFamily: FONT_FAMILY.POPPINS_SEMIBOLD }} className="">{product.title}</p>
                        <p className="ml-2 text-[#807D7E]">(x{checkoutedProduct.totalShop})</p>
                    </div>
                    <div className={`w-full flex justify-between mt-2`}>
                        <div className={`p-1 px-3 bg-[#F0F2F2] w-fit mb-1 rounded-md`}>
                            <p>{product.brand}</p>
                        </div>
                        <p>{rupiahCurrency(product.price)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSummary

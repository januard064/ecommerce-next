import { useEffect, useState } from "react"

import Image from "next/image"

import { FONT_FAMILY } from "@/Consants/FontFamily"

const ProductSummary = (props) => {

    const [product, setProduct] = useState()

    const { checkoutedProduct } = props

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
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSummary

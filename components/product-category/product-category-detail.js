import { useEffect, useState } from "react"

import Image from "next/image"
import { readableCategory } from "../ui-utils"
import ArrowRight from "../icons/arrow-right"

const ProductCategoryDetail = (props) => {

    const { category, goToProductsPage } = props

    const [categoryDetail, setCategoryDetail] = useState()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category.title}`)
            .then((response) => response.json())
            .then((cat) => setCategoryDetail(cat))
    }, [])

    return (
        <div key={category.title}
            className="w-[285px] h-[125px] flex justify-center items-center"
            onClick={() => goToProductsPage(category.title)}
        >
            <div className="group w-[280px] h-[120px] transition-all duration-200 border border-[EDEDED] rounded-[8px] text-black flex cursor-pointer 
                        hover:w-[285px] hover:h-[125px] hover:border-[#008ECC] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="w-[60%] flex items-center pl-3">
                    <Image key={`${category.title}`} src={`${category.imagePath}?v=100`} width={120} height={100} alt={category.title}
                        className="h-[90%] w-relative"
                    />
                </div>
                <div className="w-[40%] py-3 ml-[-10px]">
                    <div className="h-[40px]">
                        <p style={{ fontFamily: 'Poppins-Regular' }}>{readableCategory(category.title)} </p>
                    </div>
                    {categoryDetail &&
                        <p style={{ fontFamily: 'Poppins-ExtraLight' }} className="text-[12px] mt-2">{categoryDetail.total} products</p>
                    }

                    <div className="invisible group-hover:visible flex justify-end mt-3">
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCategoryDetail
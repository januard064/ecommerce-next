import { useRouter } from "next/router"
import Image from "next/image"
import { readableCategory } from "../ui-utils"

const ProductCategory = (props) => {

    const { category } = props

    const router = useRouter()
    const goToProductsPage = (category) => {
        const path = `/categories/${category}`

        router.push(path)
    }

    return (
        <div
            className="w-[132px] group"
            onClick={() => goToProductsPage(category.title)}
        >
            <div className="h-[132px] w-[132px] bg-[#F6F6F6] rounded-full flex justify-center items-center hover:border-[#008ECC] cursor-pointer border hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image key={`${category.title}`} src={`${category.imagePath}?v=100`} width={120} height={120} alt={category.title}
                    className="w-[75%] group-hover:w-[85%] transition-all duration-700"
                />
            </div>
            <div className="flex justify-center mt-[20px]">
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[#222222] text-sm">{readableCategory(category.title)}</p>
            </div>
        </div>
    )
}

export default ProductCategory
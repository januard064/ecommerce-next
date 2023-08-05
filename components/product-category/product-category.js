import Image from "next/image"

const ProductCategory = () => {
    return (
        <div className="w-[132px]">
            <div className="h-[132px] w-[132px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:border-[#008ECC] cursor-pointer border hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image src={`/images/category.png`} width={52} height={98} />
            </div>
            <div className="flex justify-center mt-[20px]">
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[#222222] text-sm">Mobile</p>
            </div>
        </div>
    )
}

export default ProductCategory
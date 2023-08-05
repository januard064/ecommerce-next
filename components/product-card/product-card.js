import Image from "next/image"

const ProductCard = () => {
    return (
        <div className="h-[295px] w-56 rounded-2xl border border-[#EDEDED] text-black hover:border-[#008ECC] cursor-pointer hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="relative h-48 bg-[#F5F5F5] rounded-t-2xl ">
                <div className="absolute top-0 right-0 h-[53px] w-[51px] bg-[#008ECC] rounded-tr-2xl rounded-bl-2xl flex items-center flex-wrap justify-center text-white text-sm">
                    <div className="h-[30px] text-xs">
                        <p>56%</p>
                        <p>OFF</p>
                    </div>
                </div>
                <div className="h-48 flex justify-center items-center ">
                    <Image src={`/images/iphone.png`} width={84} height={158} />
                </div>
            </div>
            <div className="p-3 text-sm">
                <div style={{ fontFamily: 'Poppins-Light' }}>
                    Galaxy S22 Ultra
                </div>
                <div style={{ fontFamily: 'Poppins-Regular' }} className="mt-1">
                    ₹32999
                </div>
                <hr className="bg-[#EDEDED] my-2" />
                <div className="text-[#249B3E]" style={{ fontFamily: 'Poppins-Light' }}>
                    Save - ₹32999
                </div>
            </div>
        </div>
    )
}

export default ProductCard
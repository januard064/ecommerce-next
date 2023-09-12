import Image from "next/image"


const ProductDetailTableBody = (props) => {

    const { cart } = props

    return (
        <div className="w-[calc(90%-8px)] ml-2">
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
    )
}

export default ProductDetailTableBody
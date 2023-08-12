import StarIcon from "../icons/star-icon"
import Image from "next/image"

const ProductCard = (props) => {

    const { product } = props

    const productTitle = (title) => {
        if (title.length >= 50) {
            return title.substring(0, 50) + "..."
        } else {
            return title
        }

    }

    const discountDecimal = (discount) => {
        return Math.round(discount)
    }

    const convertToRupiah = (price) => {
        return (parseFloat(price)) * 15000
    }

    const rupiahCurrency = (price) => {
        const rupiahPrice = parseInt(convertToRupiah(price))

        const priceCurrency = new Intl.NumberFormat("id-ID", {
            // style: "currency",
            currency: "IDR"
        }).format(rupiahPrice);

        return "Rp" + " " + priceCurrency
    }

    const discountTotal = (discount, price) => {
        return (parseFloat(discount * price) / 100)
    }

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)

    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)

    return (
        <div key={`product-${product.id}-${product.title}`} className="relative h-[315px] w-56 rounded-2xl border border-[#EDEDED] text-black hover:border-[#008ECC] cursor-pointer hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">

            {product.discountPercentage > 0 && (
                <div className="absolute top-[-1px] right-[-1px] h-[53px] w-[51px] bg-[#008ECC] rounded-tr-2xl rounded-bl-2xl flex items-center flex-wrap justify-center text-white text-sm">
                    <div className="h-[30px] text-xs">
                        <p>{`${discountDecimal(product.discountPercentage)}%`}</p>
                        <p>OFF</p>
                    </div>
                </div>
            )}
            <div className="h-48 bg-[#F5F5F5] rounded-t-2xl ">
                <div className="h-48 flex justify-center items-center ">
                    <Image src={`${product.thumbnail}`} className="rounded-t-2xl" alt="product-iamge" style={{
                        width: '99%',
                        height: '99%',
                    }} width={220} height={160} />
                </div>
            </div>
            <div className="p-3 text-sm">
                <div style={{ fontFamily: 'Poppins-Light' }} className="h-10">
                    {productTitle(product.title)}
                </div>
                {product.discountPercentage > 0 ?
                    (
                        <div className="flex mt-1">
                            <p style={{ fontFamily: 'Poppins-Regular' }}>
                                {rupiahCurrency(priceAfterDiscount)}
                            </p>
                            <p style={{ fontFamily: 'Poppins-Regular' }} className="line-through ml-2 text-xs">
                                {rupiahCurrency(product.price)}
                            </p>
                        </div>
                    ) : (
                        <p style={{ fontFamily: 'Poppins-Regular' }} className="mt-1">
                            {rupiahCurrency(product.price)}
                        </p>
                    )}
                <>
                    <hr className="bg-[#EDEDED] my-2" />
                    <div className="flex justify-between" style={{ fontFamily: 'Poppins-Light' }}>
                        <div className="flex justify-start items-center">
                            <p className="mr-1">{(product.rating).toFixed(1)}</p>
                            <StarIcon />
                        </div>
                        {product.discountPercentage > 0 && (
                            <p className="text-[#249B3E] text-xs">Save - {rupiahCurrency(saveAfterDiscount)}</p>
                        )}
                    </div>
                </>
            </div>
        </div>
    )
}

export default ProductCard
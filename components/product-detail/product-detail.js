import { useEffect, useRef, useState, useContext } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import { ShoppingContext } from "@/store/shopping-context"

import CheckoutTransaction from "@/data-connector/classes/checkout-product"

// import ui-utils
import { rupiahCurrency, discountTotal, decimalRatingDigit } from "../ui-utils"

import { Player } from "@lottiefiles/react-lottie-player"

// import icon
import StarIcon from "../icons/star-icon"
import HalfStarIcon from "../icons/half-star-icon"
import CartIcon from "../icons/cart-icon"

// import ui component
import QuantityChip from "./quantity-chip"
import Button from "../ui-guide-component/button"
import ArrowLeftCircle from "../icons/arrow-left-circle"
import ArrowRightCircle from "../icons/arrow-right-circle"

// 
import ModalDialog from "../ui-guide-component/modal-dialog"
import addedToCartAnimation from "../../public/animations/added-to-cart.json"

// import const
import { ROUTER_CONST } from "@/Consants/RouterConst"

const ProductDetail = (props) => {

    const { shoppingCart, setShoppingCart, setCheckoutTransaction, ordersHistory } = useContext(ShoppingContext)

    const router = useRouter()

    const { product, initQuantity } = props

    const allImagesRef = useRef()

    const saveAfterDiscount = discountTotal(product.discountPercentage, product.price)
    const priceAfterDiscount = parseFloat(product.price) - parseFloat(saveAfterDiscount)



    // display image state
    const [mainImagePath, setMainImagePath] = useState(product.thumbnail)

    // quantity for checkout or shop
    const [quantity, setQuantity] = useState(1)
    const [enteredQuantity, setEnteredQuantity] = useState(1)

    // modal
    const [isOpenCheckoutModal, setIsOpenCheckoutModal] = useState(false)

    const hanldeOpenCheckoutModal = () => {
        setIsOpenCheckoutModal(!isOpenCheckoutModal)
    }

    const handleChangeMainProductImage = (imgPath) => {
        setMainImagePath(imgPath)
    }

    useEffect(() => {
        setMainImagePath(product.thumbnail)

        return (() => {
            setQuantity(1)
            // console.log('pisah')
        })
    }, [product])

    // all image
    const [isReachFirstImage, setIsReachFirstImage] = useState(true)
    const [isReachLastImage, setIsReachLastImage] = useState(false)

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setIsReachFirstImage(true)
                setIsReachLastImage(false)
            } else if (element.scrollLeft == element.scrollWidth - element.clientWidth) {
                setIsReachFirstImage(false)
                setIsReachLastImage(true)
            } else {
                setIsReachFirstImage(false)
                setIsReachLastImage(false)
            }
        }, speed);
    };

    const hanldeAddToCart = (prodId) => {

        let existingInCart = shoppingCart.find((shop) => { return shop.productId === prodId })

        if (existingInCart) {
            console.log('product is exist in  cart and update total shop')
            setShoppingCart(shoppingCart.map(exist => (exist.productId === prodId ? { productId: prodId, totalShop: quantity } : exist)))
        } else {
            setShoppingCart((prevState) => [...prevState, { id: shoppingCart.length, productId: prodId, totalShop: quantity }])
        }
        hanldeOpenCheckoutModal()
    }

    const goToShoppingCart = () => {
        router.push(ROUTER_CONST.shoppingCart)
    }

    const shopNow = () => {

        const newTransaction = new CheckoutTransaction(ordersHistory.length)

        newTransaction.items = [
            {
                shoppingCartId: null,
                productId: product.id,
                totalShop: quantity,
                totalPrice: product.price * quantity,
                totalDiscount: saveAfterDiscount * quantity,
            }
        ]

        setCheckoutTransaction(newTransaction)

        router.push(ROUTER_CONST.checkoutTransaction)

    }

    return (
        <>
            <div className="flex my-8">
                <div className="w-[40%]">
                    <div className="h-[517px] border-2 border-[#EDEDED] flex justify-center items-center">
                        <div className="w-[calc(100%-32px)] h-[485px]">
                            <Image src={mainImagePath} width={424} height={590} alt="product-image-thumbnail"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 items-center" >
                        {!isReachFirstImage && product.images.length > 3 ?
                            (<div className="flex justify-center items-center h-[88px] w-[24px] cursor-pointer"
                                onClick={() => { handleHorizantalScroll(allImagesRef.current, 25, 100, -10) }}>
                                <ArrowLeftCircle />
                            </div>) : (
                                <div className="h-[88px] w-[24px]" />
                            )
                        }

                        <div className="flex overflow-hidden w-[350px]" ref={allImagesRef}>
                            {product.images.map((img, index) => (
                                <div className={index == 0 ? '' : 'ml-1'}>
                                    <div className="flex justify-center items-center w-[110px] h-[110px]">
                                        <div
                                            className={`w-[88px] h-[88px] flex justify-center items-center rounded-[8px] cursor-pointer border border-[#EDEDED] 
                                        hover:border-[#008ECC] transition-all duration-300 hover:h-[110px] hover:w-[110px] 
                                        ${img === mainImagePath ? 'h-[95px] w-[95px] border border-[#8A33FD]' : ''}
                                        `}
                                            onClick={() => handleChangeMainProductImage(img)}
                                        >
                                            <Image src={`${img}`} width={88} height={88} alt="product-image-variant"
                                                style={{ width: '95%', height: '95%' }}
                                                className="rounded-[8px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {!isReachLastImage && product.images.length > 3 ?
                            (<div className="flex justify-center items-center h-[88px] w-[24px] cursor-pointer"
                                onClick={() => { handleHorizantalScroll(allImagesRef.current, 25, 100, 10) }}>
                                <ArrowRightCircle />
                            </div>) : (
                                <div className="h-[88px] w-[24px]" />
                            )
                        }

                    </div>

                </div>
                <div className="ml-9 w-[60%]">
                    <div className="p-2 bg-[#F0F2F2] w-fit mb-1 rounded-md">
                        <p> {product.brand}</p>
                    </div>
                    <p className="text-3xl mb-2" style={{ fontFamily: 'Poppins-SemiBold' }}>{product.title}</p>

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
                                    <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[22px]">
                                        {rupiahCurrency(priceAfterDiscount)}
                                    </p>
                                    <p style={{ fontFamily: 'Poppins-Regular' }} className="line-through ml-3 text-[20px]">
                                        {rupiahCurrency(product.price)}
                                    </p>
                                </div>
                            ) : (
                                <p style={{ fontFamily: 'Poppins-Regular' }}>
                                    {rupiahCurrency(product.price)}
                                </p>
                            )}

                        {product.discountPercentage > 0 && (
                            <p style={{ fontFamily: 'Poppins-Light' }} className="text-[#807D7E] text-sm">Get Our Best Discount {product.discountPercentage}% and Save {rupiahCurrency(saveAfterDiscount)}</p>
                        )}
                    </div>

                    <hr className="bg-[#BEBCBD] my-6" />

                    <div className="flex items-center text-[16px]"
                        style={{ fontFamily: 'Poppins-Regular' }}
                    >
                        <QuantityChip quantity={quantity} setQuantity={setQuantity} enteredQuantity={enteredQuantity} setEnteredQuantity={setEnteredQuantity} product={product} />

                        <p style={{ fontFamily: 'Poppins-Light' }} className="ml-5 text-[#807D7E]">Only <span className="text-[#8A33FD]"> {product.stock} left! </span> <br /> Don't miss it</p>
                    </div>

                    <div className="flex text-[16px] mt-9 gap-x-3">
                        <Button onClick={() => hanldeAddToCart(product.id)} type={'primary'} text={'Add To Cart'} icon={<CartIcon style={{ stroke: '#FFFFFF', width: 20, height: 20 }} />} />
                        <Button onClick={shopNow} type={''} text={'Shop Now'} />
                    </div>
                </div>
            </div>

            <ModalDialog
                isOpen={isOpenCheckoutModal} onClose={hanldeOpenCheckoutModal}
                title={""}
                primaryActionText={`See Cart`}
                handlePrimaryAction={goToShoppingCart}
                body={
                    <div className="">
                        <Player
                            autoplay
                            loop
                            src={addedToCartAnimation}
                            style={{ height: '300px', width: '100%' }}
                        />

                        <div className="flex justify-center mt-[-40px]">
                            <p style={{ fontFamily: 'Poppins-Regular' }} className="text-black"> {product.title} added to cart </p>
                        </div>
                    </div>
                }

            />
        </>
    )

}

export default ProductDetail
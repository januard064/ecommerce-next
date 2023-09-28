import Image from "next/image"

import { Carousel } from "flowbite-react"

import ChevronRight from "../icons/chevron-right-icon"

import Ads1 from "../../public/images/advertisement/ads-1.png"
import Ads2 from "../../public/images/advertisement/ads-2.png"
import Ads3 from "../../public/images/advertisement/ads-3.png"
import Ads4 from "../../public/images/advertisement/ads-4.png"


const ADVERTISEMENT_BANNER = [
    {
        imgSrc: Ads2
    },
    {
        imgSrc: Ads1
    },
    {
        imgSrc: Ads3
    },
    {
        imgSrc: Ads4
    },
]


const PrevButton = () => {

    return (
        <div className={`w-[86px] h-[86px] bg-white ml-[-60px] rounded-full flex items-center justify-center`}>
            <div className={`w-[80%] h-[80%] bg-[#F3F9FB]  rounded-full flex items-center justify-center rotate-180 hover:bg-[#F0F2F2] `}>
                <ChevronRight color={"#008ECC"} />
            </div>
        </div>
    )
}

const NextButton = () => {
    return (
        <div className={`w-[86px] h-[86px] bg-white mr-[-60px] rounded-full flex items-center justify-center`}>
            <div className={`w-[80%] h-[80%] bg-[#F3F9FB]  rounded-full flex items-center justify-center  hover:bg-[#F0F2F2]`}>
                <ChevronRight color={"#008ECC"} />
            </div>
        </div>
    )
}


const AdvertisementCarousel = () => {
    return (
        <div className="h-[316px] w-full">

            <Carousel
                leftControl={<PrevButton />}
                rightControl={<NextButton />}
                indicators={false}
            >
                {
                    ADVERTISEMENT_BANNER.map((advertisement) => (
                        <Image src={advertisement.imgSrc} width={1026} height={136} alt="Advertisement Banner" />
                    ))
                }

            </Carousel>
        </div>
    )
}

export default AdvertisementCarousel
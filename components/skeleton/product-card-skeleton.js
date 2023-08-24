import ImagesIcon from "../icons/images-icon"
import StarIcon from "../icons/star-icon"

const TextSkeleton = () => {
    return (
        <div className="h-3 rounded bg-[#EDEDED]"></div>
    )
}

const ProductCardSkeleton = (props) => {
    return (
        <div key={`product-${props.index}`} className="relative h-[315px] w-[227px] rounded-[16px] border border-[#EDEDED]">
            <div className="animate-pulse">
                <div className="h-48 flex justify-center items-center ">
                    <ImagesIcon />
                </div>

                <div className="mt-[0.5px] pt-2 p-3 border-t border-[#EDEDED]">
                    <div className="h-12">
                        <TextSkeleton />
                    </div>
                    <div className="mt-1 h-3 flex">
                        <div className="w-20">
                            <TextSkeleton />
                        </div>
                        <div className="ml-2 w-20">
                            <TextSkeleton />
                        </div>
                    </div>
                    <hr className="bg-[#EDEDED] my-2" />
                    <div className="flex justify-between">
                        <div className="flex justify-start items-center">
                            <div className="mr-1 w-8">
                                <TextSkeleton />
                            </div>
                            <StarIcon color={'#EDEDED'} />
                        </div>
                        <div className="w-20">
                            <TextSkeleton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton
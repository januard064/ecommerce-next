import Image from "next/image"

const ProductCategory = (props) => {

    const { category } = props

    /**Remove character "-" to "space" */
    const titleNoChar = category.title.replace("-", " ")

    /**Capitalize each word in title */
    let words = titleNoChar.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const readableTitle = words.join(" ");

    /**TODO -> make image bigger when hover*/

    return (
        <div className="w-[132px]">
            <div className="h-[132px] w-[132px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:border-[#008ECC] cursor-pointer border hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image key={`${category.title}`} src={`${category.imagePath}?v=100`} width={120} height={120} alt="category-product-images"
                    style={{
                        width: '75%',
                        height: 'relative',
                    }}
                />
            </div>
            <div className="flex justify-center mt-[20px]">
                <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[#222222] text-sm">{readableTitle}</p>
            </div>
        </div>
    )
}

export default ProductCategory
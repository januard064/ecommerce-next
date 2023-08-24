import useSWR from 'swr'

import { getProducts } from "@/api-helpers/api-utils"
import ProductCard from "@/components/product-card/product-card"
import { useState, useEffect } from 'react'

const Products = (props) => {

    // all products state
    const [products, setProducts] = useState([])

    // load more functionality state for fetch data
    const [skip, setSkip] = useState(0)
    const [stillMore, setStillMore] = useState(true)

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        loadMoreProducts()
        console.log('products', products)
    }, [])

    // fetch data and load more functionality
    const loadMoreProducts = () => {
        setIsLoading(true)
        fetch(`https://dummyjson.com/products?limit=30&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(prevProducts => ([...prevProducts, ...data.products]))
                setSkip((prevSkip) => prevSkip + 30)
                setStillMore(data.products.length == 30)
                setIsLoading(false)
            }
            )
    }

    return (
        <>
            <div class="grid grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <ProductCard product={product} />
                ))}
            </div>
            {isLoading && <div className='text-black'>fetching</div>}

            {!isLoading && stillMore &&
                <div className='flex justify-center'>
                    <div className='text-[#666666] mt-6 rounded-md border-[1px] border-[#008ECC] hover:border-[#2F80ED] hover:border-[1.5px] hover:text-[#222222] w-[200px] h-[40px] cursor-pointer flex justify-center items-center ' onClick={loadMoreProducts}>
                        <p style={{ fontFamily: 'Poppins-Regular' }} className="text-[14px]">Load More Products</p>
                    </div>
                </div>}
        </>
    )
}

export default Products

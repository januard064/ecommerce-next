export async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')

    const products = response.json()

    return products

}

export async function getFeaturedProducts() {
    const allProducts = await getProducts()
    const sortedProducts = allProducts.products.sort(() => Math.random() - 0.5)

    const featuredProducts = sortedProducts.slice(0, 5)

    return featuredProducts
}

export async function getCategoryProducts() {

    const response = await fetch('https://dummyjson.com/products/categories')

    const productCategories = response.json()

    return productCategories
}
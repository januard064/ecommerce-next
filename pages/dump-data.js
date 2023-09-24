import CheckoutTransaction from "@/data-connector/classes/checkout-product"
import CHECKOUT_STATUS from "@/data-connector/constants/checkout-constants"
import moment from "moment"


export const CART_PRODUCTS = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 14,
        "title": "Non-Alcoholic Concentrated Perfume Oil",
        "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        "price": 9220,
        "discountPercentage": 15.6,
        "rating": 4.21,
        "stock": 114,
        "brand": "Al Munakh",
        "category": "fragrances",
        "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/14/1.jpg",
            "https://i.dummyjson.com/data/products/14/2.jpg",
            "https://i.dummyjson.com/data/products/14/3.jpg",
            "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
        ]
    },
]

/**TODO */

/**
 * struktur cart_products : {quantity, productId }
 * sementara di localstorage dulu
 * masing-masing product -> setQuantity->setLocalStorage
 * OrderSummary => useEffect paramter [quanitity], setiap ada perubahan quanitity, tarik data(sementara localstorage) dan count total
 */


export const getDumpTransaction = () => {

    const checkoutTransaction = new CheckoutTransaction(0)

    checkoutTransaction.checkoutTime = moment('2023-09-23T08:00:00+07:00')
    checkoutTransaction.checkoutStatus = CHECKOUT_STATUS.NEW
    checkoutTransaction.paidTime = moment('2023-09-23T10:00:00+07:00')
    checkoutTransaction.shippingStart = moment('2023-09-24T10:00:00+07:00')
    checkoutTransaction.eta = moment('2023-09-25T10:00:00+07:00')
    checkoutTransaction.shippingEnd = moment('2023-09-25T10:00:00+07:00')
    checkoutTransaction.address = ''
    checkoutTransaction.paymentMethod = ''

    checkoutTransaction.items = [
        {
            shoppingCartId: 1,
            productId: 1,
            totalShop: 2,
            price: 100,
            discount: 10,
        },
        {
            shoppingCartId: 1,
            productId: 2,
            totalShop: 2,
            price: 100,
            discount: 10,
        }
    ]

    return checkoutTransaction

}
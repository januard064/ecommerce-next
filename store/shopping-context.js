import { createContext, useState, useEffect } from "react";


export const ShoppingContext = createContext({})

export function ShoppingContextProvider(props) {

    const [shoppingCart, setShoppingCart] = useState([
        // {
        //     id: 1,
        //     productId: 1,
        //     totalShop: 2
        // },
        // {
        //     id: 2,
        //     productId: 2,
        //     totalShop: 1
        // }
    ])

    const [checkOutProduct, setCheckOutProduct] = useState([
        // {
        //     id: 0,
        //     shoppingCartId: 1,
        //     productId: 1,
        //     totalShop: 2,
        //     price: 100,
        //     discount: 10,
        // },
        // {
        //     id: 2,
        //     shoppingCartId: 2,
        //     productId: 3,
        //     totalShop: 2,
        //     price: 100,
        //     discount: 10,
        // }
    ])

    const [checkoutTransaction, setCheckoutTransaction] = useState([
        {
            id: '0',
            checkoutTime: '',
            checkoutStatus: '',
            paidTime: '',
            items: [
                {
                    shoppingCartId: 1,
                    productId: 1,
                    totalShop: 2,
                    price: 100,
                    discount: 10,
                }
            ],
        }
    ])

    const shoppingContextValue = {
        shoppingCart,
        setShoppingCart,
        checkOutProduct,
        setCheckOutProduct

    }

    useEffect(() => {

        console.log('shopping-cart', shoppingCart)
    }, [shoppingCart])

    useEffect(() => {

        console.log('checkout', checkOutProduct)
    }, [checkOutProduct])

    return (
        <ShoppingContext.Provider value={shoppingContextValue}>
            {props.children}
        </ShoppingContext.Provider>
    )
}
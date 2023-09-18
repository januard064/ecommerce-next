import { createContext, useState, useEffect } from "react";


export const ShoppingContext = createContext({})

export function ShoppingContextProvider(props) {

    const [shoppingCart, setShoppingCart] = useState([
        {
            productId: 1,
            totalShop: 2
        }
    ])

    const shoppingContextValue = {
        shoppingCart,
        setShoppingCart,

    }

    useEffect(() => {

        console.log('shopping-cart', shoppingCart)
    }, [shoppingCart])

    return (
        <ShoppingContext.Provider value={shoppingContextValue}>
            {props.children}
        </ShoppingContext.Provider>
    )
}
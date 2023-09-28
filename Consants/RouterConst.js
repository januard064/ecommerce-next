export const ROUTER_CONST = {
    home: '/',
    products: '/products',
    categories: `/categories`,
    shoppingCart: `/shopping-cart`,
    checkoutTransaction: `/checkout-transaction`,
    orders: `/account/orders`
}

export const ProductsPageRoute = {
    text: 'Products',
    path: ROUTER_CONST.products,
    disable: false,
}

export const CategoriesPageRoute = {
    text: 'Categories',
    path: ROUTER_CONST.categories,
    disable: false,
}

export const ShoppingCartProductsPageRoute = {
    text: 'Shopping Cart',
    path: ROUTER_CONST.shoppingCart,
    disable: false,
}

export const CheckouPageRoute = {
    text: 'Checkout',
    path: ROUTER_CONST.checkoutTransaction,
    disable: false,
}

export const OrdersPageRoute = {
    text: 'Checkout',
    path: ROUTER_CONST.orders,
    disable: false,
}
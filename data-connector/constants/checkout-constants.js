export const CHECKOUT_STATUS = {
    NEW: 'new',
    PAID: 'paid',
    SHIPPING: 'shipping',
    COMPLETED: 'completed',
    CANCELED: 'canceled',
    EXPIRED: 'expired'
}

export default CHECKOUT_STATUS

export const getCheckoutStatusText = (status) => {

    let checkoutStatus = ""

    switch (status) {
        case CHECKOUT_STATUS.NEW:
            checkoutStatus = 'New'
            break;
        case CHECKOUT_STATUS.PAID:
            checkoutStatus = 'Paid'
            break;
        case CHECKOUT_STATUS.SHIPPING:
            checkoutStatus = 'Shipping'
            break;
        case CHECKOUT_STATUS.COMPLETED:
            checkoutStatus = 'Completed'
            break;
        case CHECKOUT_STATUS.CANCELED:
            checkoutStatus = 'Canceled'
            break;
        case CHECKOUT_STATUS.EXPIRED:
            checkoutStatus = 'Expired'
            break;
        default:
            break;
    }

    return checkoutStatus
}
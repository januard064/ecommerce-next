class CheckoutTransaction {
    constructor(id) {
        this.id = id,
            this.checkoutTime = '',
            this.checkoutStatus = '',
            this.paymentMethod = '',
            this.paidTime = '',
            this.address = '',
            this.shippingStart = '',
            this.shippingEnd = '',
            this.deliveryCharges = 3,
            this.estimatedDeliveryDate = ''
        this.items = []
    }
}

export default CheckoutTransaction
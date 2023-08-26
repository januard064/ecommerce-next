export const productTitle = (title) => {
    if (title.length >= 50) {
        return title.substring(0, 50) + "..."
    } else {
        return title
    }

}

export const discountDecimal = (discount) => {
    return Math.round(discount)
}

export const convertToRupiah = (price) => {
    return (parseFloat(price)) * 15000
}

export const rupiahCurrency = (price) => {
    const rupiahPrice = parseInt(convertToRupiah(price))

    const priceCurrency = new Intl.NumberFormat("id-ID", {
        // style: "currency",
        currency: "IDR"
    }).format(rupiahPrice);

    return "Rp" + " " + priceCurrency
}

export const discountTotal = (discount, price) => {
    return (parseFloat(discount * price) / 100)
}

export const decimalRatingDigit = (rating) => {
    return rating - Math.trunc(rating)
}
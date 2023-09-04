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

export const readableCategory = (title) => {
    /**Remove character "-" to "space" */
    const titleNoChar = title.replace("-", " ")

    /**Capitalize each word in title */
    let words = titleNoChar.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const readableTitle = words.join(" ");

    return readableTitle

}
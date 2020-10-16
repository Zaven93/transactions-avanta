export const toCurrency = (price) => {
    return new Intl.NumberFormat('hy-AM', {
        currency: 'AMD',
        style: 'currency'
    }).format(price)
}

export const formatDate = (rowDate) => {
    const date = new Date(rowDate)
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

    return `${day}-${month}-${year}`
}

export const extractNumbersFromString = (string) => {
    return Number(string.match(/\d+/g))
}

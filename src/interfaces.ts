export interface ICurrencyRate {
    data: {
        [name: string]: number
    },
    meta: string,
}

export interface ICurrency {
    data: {
        [name: string]: {
            symbol: string,
            name: string,
            symbol_native: string,
            decimal_digits: number,
            rounding: number,
            code: string,
            name_plural: string
        },
    },
}
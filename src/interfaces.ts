export interface ICurrencyRate {
    [name: string]: number,
    // Record<string, number>

}

export interface ICurrency {
    [name: string]: {
        symbol: string,
        name: string,
        symbol_native: string,
        decimal_digits: number,
        rounding: number,
        code: string,
        name_plural: string
    },
}

export type TCurrency = {
    name: string,
    code: string,
    rate: number,
} ;

let b: ICurrencyRate = {
    "AED": 1.0,
    "AFN": 20.0,
    "ALL": 123.0,

}

let a: ICurrency = {
    "AED": {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },
    "AFN": {
        "symbol": "AFN",
        "name": "Afghan Afghani",
        "symbol_native": "؋",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
    },
}

let c: TCurrency = {
    name: "United Arab Emirates Dirham",
    code: "AED",
    rate: 1.0,
}



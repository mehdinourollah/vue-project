import type { ICurrency, ICurrencyRate, TCurrency } from "@/interfaces";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.freecurrencyapi.com/v1/',
    params: { apikey: 'gUvCIPR1XtqvGt4O0FBK7GUVqaWH9VxZoqQ2TCQd' },
});


export const get_currencies = async (): Promise<ICurrency> => {
    const response = await instance.get('currencies');
    console.log(response.data.data);
    return response.data.data as ICurrency;
}

export const get_rates = async (base = 'EUR'): Promise<ICurrencyRate> => {
    const response = await instance.get(`latest?base_currency=${base}`);
    console.log(response.data.data);
    return response.data.data as ICurrencyRate;
}

export const get_formatted_currency = async (): Promise<TCurrency[]> => {
    try {
        let currency_resp = await get_currencies();
        let rates_resp = await get_rates();

        let formatted_cur_arr = Object.values(currency_resp).map((value) => {
            return { name: value.name, code: value.code, rate: rates_resp[value.code] }
        })
        // array to object
        // let formatted_cur_obj = Object.assign({}, ...formatted_cur_arr.map((item) => ({ [item.code]: item })));

        return formatted_cur_arr as TCurrency[];
    }
    catch (err) {
        console.log(err);
        return [] as TCurrency[];
    }
}


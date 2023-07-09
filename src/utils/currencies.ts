import type { ICurrency, ICurrencyRate } from "@/interfaces";
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




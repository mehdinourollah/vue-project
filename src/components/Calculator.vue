<template>
    <div class="d-flex flex-col bg-slate-500">
        <div class="row">
            {{ top_currency.code }} {{ top_amount }}
        </div>
        <div class="row">
            {{ bottom_currency.code }} {{ bottom_amount }}
        </div>
        <div class="row">
            <input type="number" class="b-1 m-1 p-1 rounded-md" v-model="top_amount"
                @input="event => calculate(parseInt((event.target as HTMLInputElement).value))" @focus="topValue = true" />
            <select class=" rounded-md p-[.3rem]" @input="evt => onchangeCurrency(evt, true)">
                <option v-for="currency in Object.values(currencies)">{{ currency.name }}</option>
            </select>
        </div>

        <div class="row">
            <input type="number" class="b-1 m-1 p-1 rounded-md" v-model="bottom_amount"
                @input="event => calculate(parseInt((event.target as HTMLInputElement).value))" @focus="topValue = false" />
            <select class=" rounded-md p-[.3rem]" @input="evt => onchangeCurrency(evt, false)">
                <option v-for=" currency  in  Object.values(currencies) ">{{ currency.name }}</option>
            </select>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { get_currencies, get_rates } from '@/utils/currencies';
import { type TCurrency } from '@/interfaces';

const top_currency = ref<TCurrency>({ name: '', code: 'USD', rate: 1 })
const bottom_currency = ref<TCurrency>({ name: '', code: 'USD', rate: 1 })

const top_amount = ref(0)
const bottom_amount = ref(0)

const topValue = ref(true)

const currencies = ref(await get_currencies())
const rates = ref(await get_rates())

const formatted_cur_arr = ref(Object.values(currencies.value).map((value) => {
    return { name: value.name, code: value.code, rate: rates.value[value.code] }
}))

const onchangeCurrency = (event: Event, top: boolean) => {
    const currency = (event.target as HTMLInputElement).value;
    console.log(currency);

    if (top) {
        console.log({ top })
        top_currency.value = formatted_cur_arr.value.find((cur) => cur.name === currency) || { name: '', code: 'USD', rate: 1 };
        bottom_amount.value = top_amount.value * (bottom_currency.value.rate / top_currency.value.rate);
    } else {
        console.log({ top })
        bottom_currency.value = formatted_cur_arr.value.find((cur) => cur.name === currency) || { name: '', code: 'USD', rate: 1 };
        top_amount.value = bottom_amount.value * (top_currency.value.rate / bottom_currency.value.rate);
    }
}



const calculate = (amount: number) => {
    console.log(amount);
    if (topValue.value) {
        console.log(topValue.value)
        // top_currency.value = formatted_cur_arr.value.find((cur) => cur.name === currency);
        top_amount.value = amount;
        bottom_amount.value = amount * (bottom_currency.value.rate / top_currency.value.rate);
    } else {
        console.log(topValue.value)
        // bottom_currency.value = formatted_cur_arr.value.find((cur) => cur.name === currency);
        bottom_amount.value = amount;
        top_amount.value = amount * (top_currency.value.rate / bottom_currency.value.rate);
    }
}



</script>
    
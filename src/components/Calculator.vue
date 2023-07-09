<template>
    <div class="d-flex flex-col bg-white rounded-md p-[3%]">
        <div class="row">
            {{ top_currency.code }} {{ formattedNumber(top_amount) }}
        </div>
        <div class="row">
            {{ bottom_currency.code }} {{ formattedNumber(bottom_amount) }}
        </div>
        <div class="row">
            <input type="number" class="b-1 m-1 p-1 rounded-md" :value="formattedNumber(top_amount)"
                @input="event => onChange({ amount: parseInt((event.target as HTMLInputElement).value) })"
                @focus="topValue = true" />
            <Suspense>
                <template #fallback>
                    <Spinner />
                </template>
                <template #default>
                    <CurrencyDropDown :onChange="onChange" :top="true" :currencies="currencies" />
                </template>
            </Suspense>
        </div>

        <div class="row">
            <input type="number" class="b-1 m-1 p-1 rounded-md" :value="formattedNumber(bottom_amount)"
                @input="event => onChange({ amount: parseInt((event.target as HTMLInputElement).value) })"
                @focus="topValue = false" />

            <Suspense>
                <CurrencyDropDown :onChange="onChange" :top="false" :currencies="currencies" />
            </Suspense>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import { get_formatted_currency } from '@/utils/currencies';
import { type TCurrency } from '@/interfaces';
import CurrencyDropDown from './CurrencyDropDown.vue';
import Spinner from './Spinner.vue';

const top_currency = ref<TCurrency>({ name: '', code: 'EUR', rate: 1 })
const bottom_currency = ref<TCurrency>({ name: '', code: 'EUR', rate: 1 })
const top_amount = ref(0)
const bottom_amount = ref(0)
const topValue = ref(true)
const currencies = ref<TCurrency[]>([])

const formattedNumber = (x: number) => Math.round(x * 100) / 100;

try {
    const resp = await get_formatted_currency()
    currencies.value = resp

    top_currency.value = resp.find((cur) => cur.code === 'EUR') || { name: '', code: 'EUR', rate: 1 };
    bottom_currency.value = resp.find((cur) => cur.code === 'EUR') || { name: '', code: 'EUR', rate: 1 };

} catch (error) {
    console.log({ error })
}

const onChange = (props: { amount?: number, event?: Event, top?: boolean }) => {
    const { amount, event, top } = props;
    if (amount) {
        if (topValue.value) {
            top_amount.value = amount;
            bottom_amount.value = amount * (bottom_currency.value.rate / top_currency.value.rate);
        } else {
            bottom_amount.value = amount;
            top_amount.value = amount * (top_currency.value.rate / bottom_currency.value.rate);
        }
    } else if (event && !Object.is(top, null)) {
        const currency = (event.target as HTMLInputElement).value;
        if (top) {
            top_currency.value = currencies.value.find((cur) => cur.name === currency) || { name: '', code: 'USD', rate: 1 };
            bottom_amount.value = top_amount.value * (bottom_currency.value.rate / top_currency.value.rate);
        } else {
            bottom_currency.value = currencies.value.find((cur) => cur.name === currency) || { name: '', code: 'USD', rate: 1 };
            top_amount.value = bottom_amount.value * (top_currency.value.rate / bottom_currency.value.rate);
        }
    }
}

</script>
    
<template>
    <select class=" rounded-md p-[.3rem]" @input="(evt: Event) => onChange({ event: evt, top: top })">
        <option v-for=" currency in currencies ">{{ currency.name }}</option>
    </select>
</template>

<script setup lang="ts">
const props = defineProps(['onChange', 'currencies', 'top'])

</script>


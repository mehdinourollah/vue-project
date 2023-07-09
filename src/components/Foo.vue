<template>
    <h1>{{ msg }}</h1>
    <p>
        <input type="text" v-model="inputMsg" />
        <button @click="msg = inputMsg">Update Message</button>
    </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const msg = ref('Hello world!')
const inputMsg = ref('')

</script>
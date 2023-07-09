<script setup lang="ts">
import Calculator from './components/Calculator.vue';

</script>

<template>
  <Suspense>
    <template #fallback>
      <div>Loading...</div>
    </template>

    <template #default>
      <Calculator />
    </template>

  </Suspense>
</template>


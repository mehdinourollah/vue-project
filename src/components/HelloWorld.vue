<script setup lang="ts">
import { useCounterStore,useStore } from '@/stores/counter';
import { ref, type Ref } from 'vue';

defineProps<{
  msg: string
}>()

// const count: Ref<number> = ref(0)

// const store = useCounterStore()
// let count = store.count

const store = useStore()

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You clicked {{ store.count }} times.
      You clicked {{ store.test }} times.
      <button @click="store.increment">Click me</button>
      <input v-model="store.test" />
    </h3>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

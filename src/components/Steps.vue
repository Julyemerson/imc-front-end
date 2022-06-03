<template>
  <div class=" flex items-center z-10 space-x-16">
    <div v-if="!store.isLogged" class="flex flex-col items-center space-y-2">
      <div class=" top-4 rounded-full h-12 w-12" :class="actualStepRoute('home')">
        <h2 class="text-center font-medium text-xl mt-2">1</h2>
      </div>
      <h3 class="font-normal">Cadastro</h3>
    </div>
    <div v-if="store.isLogged" class="flex flex-col items-center space-y-2">
      <div class=" top-4 rounded-full h-12 w-12" :class="actualStepRoute('logged')">
        <h2 class="text-center font-medium text-xl mt-2">1</h2>
      </div>
      <h3 class="font-normal">Login</h3>
    </div>
    <div class="flex flex-col items-center space-y-2">
      <div class=" top-4 rounded-full h-12 w-12" :class="actualStepRoute('imcData')">
        <h2 class="text-center  font-medium text-xl mt-2">2</h2>
      </div>
      <h3 class="font-normal">Peso e Altura</h3>
    </div>
    <div class="flex flex-col items-center space-y-2">
      <div class=" top-4 rounded-full h-12 w-12" :class="actualStepRoute('result')">
        <h2 class="text-center font-medium text-xl mt-2">3</h2>
      </div>
      <h3 class="font-normal">Resultado</h3>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/imcStore';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const store = useStore()

onBeforeMount(() => {
  store.setLogged()
})



const actualStepRoute = ((route) => {
  return route === useRoute().name ? 'bg-teal-500' : 'border border-teal-500 '
})





</script>

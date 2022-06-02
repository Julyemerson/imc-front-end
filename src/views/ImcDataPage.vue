<template>
    <form class="">
        <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
            <label class=" text-2xl font-medium text-gray-700" for="weight">Peso:</label>
            <input placeholder="peso" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="number" id="weight">

            <label class="block text-2xl font-medium text-gray-700" for="height">Altura: </label>
            <input placeholder="altura em cm" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="number" id="height">


            <div class="space-x-2 flex items-center justify-center">
                <button @click.prevent="$router.push({ name: 'home' }), setStep(1)" class="border-solid border-2 px-4 py-2
                text-gray-700 font-medium border-teal-400 rounded-lg hover:text-gray-700 hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500
                 ">
                    Voltar
                </button>
                <button @click.prevent="$router.push({ name: 'result' }), setStep(3)" class="border-solid border-2 px-4 py-2 bg-teal-400 rounded-lg 
                hover:border-none hover:text-gray-700 font-medium hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500">
                    Proxima Etapa
                </button>
            </div>
        </div>
    </form>
</template>
<script setup>

import { useStore } from '@/stores/imcStore';

const store = useStore()

const setStep = (step) => {
    store.setStep(step)
}


</script>

<style lang="scss" scoped>
</style>
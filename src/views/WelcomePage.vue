<template>
    <form>
        <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
            <label class=" text-2xl font-medium text-gray-700" for="name">Nome:</label>
            <input autocomplete="name" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="text" id="name">

            <label class="block text-2xl font-medium text-gray-700" for="email">E-mail:</label>
            <input autocomplete="email" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="text" id="email">

            <button @click.prevent="$router.push({ name: 'imcData' }), setStep(2)" class="border-solid border-2 px-4 py-2 border-teal-400 rounded-lg 
                hover:border-none hover:bg-teal-400 hover:text-gray-700 font-medium hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500">
                Proxima Etapa
            </button>
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
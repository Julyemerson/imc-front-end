<template>
    <div class=" flex items-center z-10 space-x-16">
        <div class="flex flex-col items-center space-y-2">
            <div class=" top-4 rounded-full h-12 w-12" :class="classObject(1)">
                <h2 class="text-center font-medium text-xl mt-2">1</h2>
            </div>
            <h3 class="font-normal">Cadastro</h3>
        </div>
        <div class="flex flex-col items-center space-y-2">
            <div class=" top-4 rounded-full h-12 w-12" :class="classObject(2)">
                <h2 class="text-center  font-medium text-xl mt-2">2</h2>
            </div>
            <h3 class="font-normal">Peso e Altura</h3>
        </div>
        <div class="flex flex-col items-center space-y-2">
            <div class=" top-4 rounded-full h-12 w-12" :class="classObject(3)">
                <h2 class="text-center font-medium text-xl mt-2">3</h2>
            </div>
            <h3 class="font-normal">Resultado</h3>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '@/stores/imcStore';


const store = useStore()

const classObject = ((step) => {
    if (store.step === step) {
        return 'bg-teal-500'
    }
    return 'border border-teal-500 '
})

</script>

<style lang="scss" scoped>
</style>
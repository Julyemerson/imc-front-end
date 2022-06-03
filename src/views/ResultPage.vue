<template>
    <div class="flex flex-col p-6 rounded-md space-y-4 relative h-1/2 ">
        <h3 class="text-center font-medium text-xl text-gray-700">Resultado:</h3>
        <Suspense>
            <table class="table-auto border-2 border-teal-500  ">
                <thead class="">
                    <tr>
                        <th class="py-2 border-r-2 border-teal-500">Data</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody class="w-2">
                    <tr v-for="item in imcItems" :key="item.id" class="space-y-3 border-2 border-teal-500">
                        <td class="p-2 border-r-2 border-teal-500">{{ handleDateFormat(item.createdAt) }}</td>
                        <td class="p-2 border-r-2 border-teal-500">{{ item.imc }}</td>
                    </tr>
                </tbody>
            </table>
        </Suspense>
        <div class="space-x-2 flex items-center justify-center">
            <button @click.prevent="$router.push({ name: 'imcData' })" class="border-solid border-2 px-4 py-2
                text-gray-700 font-medium border-teal-400 rounded-lg hover:text-gray-700 hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500
                 ">
                Voltar
            </button>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { format } from "date-fns"
import { useStore } from '@/stores/imcStore';
import api from '../services/api';

const store = useStore()

const getUser = (async () => {
    try {
        const response = await api.get(`/user/${store.user.id}`)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
})

onMounted(() => {
    getUser()
})


const handleDateFormat = ((fullDate) => {
    const realDateTime = new Date(fullDate)
    return format(realDateTime, 'dd/MM/yyyy')

})






console.log(await imcItems())




</script>
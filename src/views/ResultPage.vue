<template>
  <div class="flex flex-col p-6 rounded-md space-y-4 relative h-1/2 ">
    <h3 class="text-center font-medium text-xl text-gray-700">Resultado:</h3>
    <table class="table-auto border-2 border-teal-500  ">
      <thead class="">
        <tr>
          <th class="py-2 border-r-2 border-teal-500">Data</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody class="w-2">
        <tr v-for="item in imcItems" :key="item.id"
          class="space-y-3 border-2 border-teal-500 hover:bg-gray-200 cursor-pointer">
          <td class="p-2 border-r-2 border-teal-500 font-medium ">{{
              handleDateFormat(item.createdAt)
          }}</td>
          <td class="p-2 border-r-2 border-teal-500 font-medium ">{{ item.imc }}</td>
        </tr>
      </tbody>
    </table>
    <div class="space-x-2 flex items-center justify-center">
      <button @click.prevent="$router.push({ name: 'imcData' })" class="btn-previous">
        Voltar
      </button>
    </div>
  </div>
</template>
<script setup>
import { format } from "date-fns"
import { useStore } from '@/stores/imcStore';
import { api } from "../services/api";
import { onMounted } from "vue";

const store = useStore()


const userHealth = onMounted(async () => {
  const { data } = await api.get(`users/${store.user.id}`).then((req) => req)
  return data.health
})

const imcItems = await userHealth()


const handleDateFormat = ((fullDate) => {
  const realDateTime = new Date(fullDate)
  return format(realDateTime, 'dd/MM/yyyy')

})


</script>

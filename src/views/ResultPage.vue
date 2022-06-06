<template>
  <Steps />
  <div class="flex flex-col p-6 rounded-md space-y-4 relative h-1/2 ">
    <h3 class="text-center font-medium text-xl text-gray-700">Resultado:</h3>
    <table class="table-auto border-2 border-teal-500  ">
      <thead class="">
        <tr>
          <th class="py-2 border-r-2 border-teal-500">Data</th>
          <th class="py-2 border-r-2 border-teal-500">IMC</th>
          <th class="py-2 px-1 border-r-2 border-teal-500">Excluir</th>
        </tr>
      </thead>
      <tbody class="w-2">
        <tr v-for="item in imcItems" :key="item.id"
          class="space-y-3 border-2 border-teal-500 hover:bg-teal-100 cursor-pointer">
          <td class="p-2 border-r-2 border-teal-500 font-medium ">{{ handleDateFormat(item.createdAt) }}</td>
          <td class="p-2 border-r-2 border-teal-500 font-medium ">{{ item.imc }}</td>
          <td class="p-2 border-r-2 border-teal-500 font-medium ">
            <div @click="deleteImc(item.id)"
              class="rounded-full p-1 border text-center cursor-pointer border-teal-400 h-8 w-8">X</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="space-x-2 flex items-center justify-center">
      <button @click.prevent="$router.push({ name: 'home' })" class="btn-previous">
        Home
      </button>
    </div>
  </div>
</template>
<script setup>
import Steps from "@/components/Steps.vue";
import { ref } from "vue";
import { format } from "date-fns"
import { useStore } from '@/stores/imcStore';
import { api } from "@/services/api";

const store = useStore()

const { data } = await api.get(`users/${store.user.id}`)
const imcItems = ref(await data.health)


const deleteImc = (async (id) => {
  const index = imcItems.value.findIndex((imc) => imc.id === id)

  try {
    await api.delete(`/health/${id}`)
    imcItems.value.splice(index, 1)
  } catch (error) {
    console.log(error)
  }
})

const handleDateFormat = ((fullDate) => {
  const realDateTime = new Date(fullDate)
  return format(realDateTime, 'dd/MM/yyyy')

})

</script>

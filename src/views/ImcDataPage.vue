<template>
    <form>
        <h3 v-if="hasUser" class="text-gray-700 font-medium text-center text-lg mt-4">Olá, {{ store.user.name
        }}! <br />
            Agora eu preciso do seu <strong>peso e altura </strong><span class="text-xs text-gray-400">(em cm)</span>
        </h3>
        <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
            <label class=" text-2xl font-medium text-gray-700" for="weight">Peso:</label>
            <input placeholder="peso" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="number" name="weight"
                id="weight" v-model="weight">
            <span class="text-red-500 font-medium text-sm">{{ weightError }}</span>

            <label class="block text-2xl font-medium text-gray-700" for="height">Altura: </label>
            <input placeholder="altura em cm" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="number" name="height"
                id="height" v-model="height">
            <span class="text-red-500 font-medium text-sm">{{ heightError }}</span>

            <div class="space-x-2 flex items-center justify-center">
                <button @click.prevent="$router.push({ name: 'home' })" class="border-solid border-2 px-4 py-2
                text-gray-700 font-medium border-teal-400 rounded-lg hover:text-gray-700 hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500
                 ">
                    Voltar
                </button>
                <button @click.prevent="onSubmit" class="border-solid border-2 px-4 py-2 bg-teal-400 rounded-lg 
                hover:border-none hover:text-gray-700 font-medium hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500">
                    Proxima Etapa
                </button>
            </div>
        </div>
    </form>
</template>
<script setup>
import api from '@/services/api';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import * as yup from "yup"
const store = useStore()

const router = useRouter()

const hasUser = store.user.name ? true : false

const schema = yup.object({
    weight: yup.number().required().min(30),
    height: yup.number().required().min(100),
})

const { handleSubmit } = useForm({
    validationSchema: schema,
})

const onSubmit = handleSubmit(async () => {
    const store = useStore()
    const imcData = {
        "height": Number(height.value),
        "weight": Number(weight.value),
        "userEmail": store.user.email
    }
    try {
        const res = await api.post('/health', imcData, { headers: 'application/json' })
        store.setImcResult(res.data)
        router.push({ name: 'result' })
    } catch (error) {
        console.log(error)
    }
})
const { value: weight, errorMessage: weightError } = useField('weight');
const { value: height, errorMessage: heightError } = useField('height');
</script>

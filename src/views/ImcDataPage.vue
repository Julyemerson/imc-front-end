<template>
  <Steps />
  <form>
    <h3 v-if="hasUser" class="text-gray-700 font-medium text-center text-lg mt-4">Olá, {{ store.user.name }}! <br />
      Agora eu preciso do seu <strong>peso e altura </strong><span class="text-xs text-gray-400">(em cm)</span>
    </h3>
    <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
      <BaseInput name="weight" v-model="weight" label="Peso:" type="number" />
      <span class="text-red-500 font-medium text-sm">{{ weightError }}</span>

      <BaseInput name="height" v-model="height" label="Altura:" type="number" />
      <span class="text-red-500 font-medium text-sm">{{ heightError }}</span>

      <div class="space-x-2 flex items-center justify-center">
        <button @click.prevent="$router.push({ name: 'home' })" class="btn-previous">
          Voltar
        </button>
        <button @click.prevent="onSubmit" class="btn-next bg-teal-400">
          Proxima Etapa
        </button>
      </div>
    </div>
  </form>
</template>
<script setup>
import { api } from '@/services/api';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useLoading } from 'vue-loading-overlay';
import { useRouter } from 'vue-router';
import { loaderConfig } from '@/utils/loaderConfig';
import * as yup from "yup"
import BaseInput from '../components/BaseInput.vue';
import Steps from '../components/Steps.vue';


const store = useStore()
const router = useRouter()
const hasUser = store.user.name ? true : false

const schema = yup.object({
  weight: yup.number().required('Não pode ser vazio').min(30, 'Seu peso deve ser maior que 30'),
  height: yup.number().required('Não pode ser vazio').min(100, 'Sua Altura deve ser maior que 100cm'),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const $loading = useLoading()

const onSubmit = handleSubmit(async () => {
  const loader = $loading.show(loaderConfig)
  const store = useStore()
  const imcData = {
    "height": Number(height.value),
    "weight": Number(weight.value),
    "userEmail": store.user.email
  }
  try {
    await api.post('/health', imcData, { headers: 'application/json' })
    loader.hide()
    router.push({ name: 'result' })
  } catch (error) {
    loader.hide()
    console.log(error)
  }
})
const { value: weight, errorMessage: weightError } = useField('weight');
const { value: height, errorMessage: heightError } = useField('height');
</script>

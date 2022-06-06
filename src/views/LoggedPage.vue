<template>
  <Steps />
  <form>
    <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
      <BaseInput name="loggedEmail" v-model="loggedEmail" label="Email:" placeholder="Insira o email cadastrado" />
      <span class="text-red-500 font-medium text-sm"> {{ emailError }} </span>

      <div class="space-x-2 flex items-center justify-center">
        <button @click="$router.push({ name: 'home' })" class="btn-previous ">
          Voltar
        </button>
        <button @click.prevent="onSubmit" type="submit" class="btn-next bg-teal-400">
          Proxima Etapa
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import Steps from '@/components/Steps.vue';
import { loaderConfig } from '@/utils/loaderConfig';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useLoading } from 'vue-loading-overlay';
import { api } from '@/services/api';
import * as yup from "yup"
import { useRouter } from 'vue-router';

const store = useStore()
const $loading = useLoading()
const router = useRouter()

const initialValues = {
  loggedEmail: store.user.email
}

const schema = yup.object({
  loggedEmail: yup.string()
    .required('O campo email não pode ser vazio')
    .email('Deve conter um email valido')
})

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues
})

const onSubmit = handleSubmit(async () => {
  const loader = $loading.show()
  if (!store.user.email) {
    store.setUserEmail(loggedEmail.value)
  }
  try {
    const res = await api.get('/users', {
      params: { email: store.user.email }
    })
    store.setUser(res.data)
    router.push({ name: 'imcData' })
  } catch (error) {
    console.log(error)
  } finally {
    loader.hide()
  }
})

const { value: loggedEmail, errorMessage: emailError } = useField('loggedEmail');
</script>

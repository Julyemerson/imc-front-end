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

const store = useStore()
const $loading = useLoading()

const schema = yup.object({
  email: yup.string().required().email()
})

const initialValue = {
  loggedEmail: store.user.email
}

const { handleSubmit, } = useForm({
  initialValues: initialValue,
  validationSchema: schema,
})


const onSubmit = handleSubmit(async () => {
  const store = useStore()
  const loader = $loading.show(loaderConfig)
  console.log('chegou aqui')
  try {
    const userLogged = await api.get('/users', {
      params: {
        email: store.user.email
      },
      headers: 'application/json'
    })
    console.log(userLogged)
    store.setUser(userLogged)
  } catch (error) {
    console.log(error)
  } finally {
    loader.hide()
  }
})

const { value: loggedEmail, errorMessage: emailError } = useField('loggedEmail');
</script>

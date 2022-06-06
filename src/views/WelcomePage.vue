<template>
  <Steps />
  <div v-if="hasError" class="flex flex-col items-center">
    <h3 class="text-lg font-medium text-red-500">Este email já está cadastrado em nosso sistema.</h3>
    <RouterLink class="text-teal-500 text-md font-normal underline decoration-wavy" :to="{ name: 'login' }">Acesso por
      email
    </RouterLink>
  </div>
  <form>
    <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
      <BaseInput name="name" v-model="name" label="Nome:" />
      <span class="text-red-500 font-medium text-sm">{{ nameError }}</span>

      <BaseInput name="email" v-model="email" label="Email:" />
      <span class="text-red-500 font-medium text-sm">{{ emailError }}</span>

      <button @click.prevent="onSubmit" type="submit" class="btn-next">
        Proxima Etapa
      </button>
    </div>
  </form>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import Steps from '@/components/Steps.vue';
import { api } from '@/services/api';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import { useLoading } from 'vue-loading-overlay';
import { loaderConfig } from '@/utils/loaderConfig';
import { ref } from 'vue';
import * as yup from "yup"

const store = useStore()
const router = useRouter()
const hasError = ref(false)

const schema = yup.object({
  email: yup.string()
    .required('O campo email não pode ser vazio')
    .email('Deve conter um email valido'),
  name: yup.string().required('O campo nome não pode ser vazio')
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const $loading = useLoading()

const onSubmit = handleSubmit(async () => {
  const loader = $loading.show(loaderConfig)
  const CONFLICT_ERROR = 409
  const users = {
    "name": name.value,
    "email": email.value
  }
  try {
    const res = await api.post('/users', users, { headers: 'application/json' })
    store.setUser(res.data)
    loader.hide()
    router.push({ name: 'imcData' })
  } catch (error) {
    if (error.response.status === CONFLICT_ERROR) {
      store.setUserEmail(users.email)
      hasError.value = true
      loader.hide()
    }
  }
})

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');

</script>


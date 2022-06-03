<template>
  <div v-if="hasError" class="flex flex-col items-center">
    <h3 class="text-lg font-medium text-red-500">Este email já está cadastrado em nosso sistema.</h3>
    <RouterLink class="text-teal-500 text-md font-normal underline decoration-wavy" :to="{ name: 'logged' }">Acesso por
      email
    </RouterLink>
  </div>
  <form>
    <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
      <BaseInput name="name" v-model="name" label="Nome:" />
      <span class="text-red-500 font-medium text-sm">{{ nameError }}</span>

      <BaseInput name="email" v-model="email" label="Email:" />
      <span class="text-red-500 font-medium text-sm">{{ emailError }}</span>

      <button @click.prevent="onSubmit" class="btn-next">
        Proxima Etapa
      </button>
    </div>
  </form>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import { api } from '@/services/api';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import { useLoading } from 'vue-loading-overlay';
import { ref } from 'vue';
import * as yup from "yup"

const router = useRouter()

const hasError = ref(false)

const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required()
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})


const $loading = useLoading()
const loaderConfig = {
  color: '#14b8a',
  backgroundColor: 'rgba(136,136,136,0.1)',
  blur: '2px',
  opacity: 1,
  canCancel: false,
  isFullPage: true,
  loader: 'dots'
}

const onSubmit = handleSubmit(async () => {
  const loader = $loading.show(loaderConfig)
  const store = useStore()
  const users = {
    "name": name.value,
    "email": email.value
  }
  const CONFLICT_ERROR = 409
  try {
    const res = await api.post('/users', users, { headers: 'application/json' })
    store.setUser(res.data)
    loader.hide()
    router.push({ name: 'imcData' })
  } catch (error) {
    if (error.response.status === CONFLICT_ERROR) {
      return hasError.value = true
    }
  } finally {
    loader.hide()
  }
})

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');

</script>


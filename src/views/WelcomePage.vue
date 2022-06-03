<template>
    <form>
        <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
            <label class=" text-2xl font-medium text-gray-700" for="name">Nome:</label>
            <input autocomplete="name" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="text" name="name"
                id="name" v-model="name">
            <span class="text-red-500 font-medium text-sm">{{ nameError }}</span>

            <label class="block text-2xl font-medium text-gray-700" for="email">E-mail:</label>
            <input autocomplete="email" class="w-full text-xl px-3 py-2 rounded-lg shadow-sm border border-gray-300 
            focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 " type="text" name="email"
                id="email" v-model="email">
            <span class="text-red-500 font-medium text-sm">{{ emailError }}</span>

            <button @click.prevent="onSubmit" class="border-solid border-2 px-4 py-2 border-teal-400 rounded-lg 
                hover:border-none hover:bg-teal-400 hover:text-gray-700 font-medium hover:scale-110 
                hover:transition hover:ease-in-out hover:duration-500">
                Proxima Etapa
            </button>
        </div>
    </form>
</template>

<script setup>
import api from '@/services/api';
import { useStore } from '@/stores/imcStore';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import * as yup from "yup"

const router = useRouter()

const schema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().required()
})

const { handleSubmit } = useForm({
    validationSchema: schema,
})

const onSubmit = handleSubmit(async () => {
    const store = useStore()
    const users = {
        "name": name.value,
        "email": email.value
    }
    const CONFLICT_ERROR = 409
    try {
        const res = await api.post('/users', users, { headers: 'application/json' })
        store.setUser(res.data)
        router.push({ name: 'imcData' })
    } catch (error) {
        if (error.status === CONFLICT_ERROR) {
            console.log('usuário já cadastrado')
        }
    }
})

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');

</script>


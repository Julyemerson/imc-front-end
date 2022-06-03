<template>
  <form>
    <div class="flex flex-col p-6 rounded-md  space-y-4 relative h-1/2 ">
      <BaseInput name="LoggedEmail" label="Email:" placeholder="Insira o email cadastrado" />
      <span class="text-red-500 font-medium text-sm"> emailError </span>

      <div class="space-x-2 flex items-center justify-center">
        <button @click="$router.push({ name: 'home' })" class="btn-previous ">
          Voltar
        </button>
        <button @click.prevent="" class="btn-next bg-teal-400">
          Proxima Etapa
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import { useField, useForm } from 'vee-validate'
import * as yup from "yup"
import { useLoading } from 'vue-loading-overlay';



</script>

<style lang="scss" scoped>
</style>

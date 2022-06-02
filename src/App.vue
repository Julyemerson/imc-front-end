<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
    <div class="flex flex-col justify-center items-center h-screen  bg-gray-100 ">
      <Steps />
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import Steps from '@/components/Steps.vue';

</script>

<style lang="scss" scoped>
</style>
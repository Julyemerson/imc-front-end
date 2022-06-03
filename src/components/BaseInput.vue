<template>
    <label class=" text-2xl font-medium text-gray-700" for="input-base">{{ label }}</label>
    <input class="input-base" v-bind="$attrs" :name="name" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" id="input-base">
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})
</script>

<style lang="scss" scoped>
</style>
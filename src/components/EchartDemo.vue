<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    options: {
        type: String,
        required: true
    }
})
const data = ref()
data.value = await JSON.parse(props.options)
</script>
<template>
    <Suspense>
        <EchartDemo :options="chart" />
        <template #fallback>
            Loading Chart...
        </template>
    </Suspense>
</template>

<script setup>
defineProps({
    chart: {
        type: String,
        required: true
    }
})
</script>
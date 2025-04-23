<template>
    <template v-for="(chart, i) in charts" :key="i">
        <Teleport :to="markdown?.querySelectorAll('.chart')[i] ?? 'body'" defer>
            <ChartContent :chart="chart.text" />
        </Teleport>
    </template>
    <div v-html="text" ref="html"></div>
</template>

<script setup>
import { marked } from 'marked';
import { computed, ref, useTemplateRef } from 'vue';

const props = defineProps({
    content: {
        type: String,
        required: true
    }
})
const markdown = useTemplateRef('html')
const charts = ref([])
const text = computed(() => {
    const tokens = marked.lexer(props.content)
    const chartTokens = tokens.filter(v => {
        return v.type === 'chart'
    })
    charts.value = [...chartTokens]
    return marked.parser(tokens)
})
// console.log(12);
</script>
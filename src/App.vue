<script setup>
import MarkContent from './components/MarkContent.vue';
const content = "# heading 1\n\n## heading 2 \n'''\n{\"test\": 123}\n'''\n### heading 3\n'''{\"test\": 456}'''"
</script>

<template>
  <MarkContent :content="content" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

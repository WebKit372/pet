<script setup>

const props = defineProps({
  title: String,
})
</script>

<template>
 <div class="bg-white text-center rounded-2xl p-5 max-w-5xl w-full">
  <h1 class="font-sans text-lg font-semibold">{{title}}</h1>
 </div>
</template>
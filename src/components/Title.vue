<script setup>

const props = defineProps({
  title: String,
})
</script>

<template>
 <div class="bg-white text-center rounded-2xl">
  <p class="font-sans text-lg font-semibold">{{title}}</p>
 </div>
</template>
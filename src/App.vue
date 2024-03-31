<script setup>
import Title from './components/Title.vue';
const greeting = "Услуги Росавиации"
</script>

<template>
  <div class="main p-20 flex flex-col items-center">
    <Title :title="greeting"/>
    <RouterView/>
  </div> 
</template>

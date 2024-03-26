<script setup>
import Title from './components/Title.vue';
import ServiceList from './components/ServiceList/ServiceList.vue';
const greeting = "Услуги Росавиации"
</script>

<template>
  <div class="main p-20 flex flex-col items-center">
    <Title :title="greeting"/>
    <RouterLink to="/test">Go to test</RouterLink>
    <RouterLink to="/1">Go to 1</RouterLink>
    <RouterView/>
  </div> 
</template>

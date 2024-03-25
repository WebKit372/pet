<script setup>
import Title from './components/Title.vue';
import ServiceList from './components/ServiceList/ServiceList.vue';
const greeting = "Услуги Росавиации"
</script>

<template>
  <div class="main p-20 flex flex-col flex-wrap content-center">
    <Title :title="greeting"/>
    <ServiceList class="mt-5"/>
  </div>
</template>

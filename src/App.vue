<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Title from './components/Title.vue';
const greeting = "Услуги Росавиации"
</script>

<template>
  <div class="main p-20">
    <Title :title="greeting"/>
  </div>
</template>

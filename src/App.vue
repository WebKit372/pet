<script setup>
import { ref, watch } from 'vue';
import Title from './components/Title.vue';
const greeting = "Услуги Росавиации"
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const show = ref(false);
watch(route, (to , from) => {
  console.log(from.path.split('/')[1])
    if(from.path.split('/')[1] === 'service'){
      show.value = true;
      return
    }
    show.value = false;
  })
  function toHome(){
    router.push('/')
  }
</script>

<template>
  <div class="main p-20 flex flex-col items-center">
    <div v-if="show" class="self-start">
      <img @click="toHome" class="max-w-12 max-h-12 mb-5 ease-in-out duration-300 hover:opacity-50 hover:scale-125 hover:cursor-pointer" src="./assets/return-back-button-svgrepo-com.svg"/>
    </div>
    <Title :title="greeting"/>
    <RouterView/>
  </div> 
</template>

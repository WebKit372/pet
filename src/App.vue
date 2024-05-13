<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import Title from './components/TitleComponent.vue';
import { useRoute, useRouter } from 'vue-router';
const greeting : Ref<string> = ref("Услуги Росавиации")
const route = useRoute();
const router = useRouter();
const back = ref(false);
const history = ref(false);
watch(route, (to, from) => {
    if(!from.path.split('/')[1]){
      back.value = false;
      history.value = false;
      greeting.value = 'Услуги Росавиации'  
      return
    }
    else if(from.path.split('/')[1] === 'service'){
      history.value = true
    }
    else{
      history.value = false 
      greeting.value = 'История'     
    }
    back.value = true;    
  })
function toHome(){
  router.go(-1)
}
</script>

<template>
  <div class="main p-0 flex flex-col items-center md:p-20 sm:p-10">
    <div class="flex flex-col items-center w-full max-w-5xl relative mt-20">
      <div v-if="back" class="self-start absolute -top-20">
        <img @click="toHome" class="max-w-12 max-h-12 mb-5 ease-in-out duration-300 hover:opacity-50 hover:scale-125 hover:cursor-pointer" src="./assets/return-back-button-svgrepo-com.svg"/>
      </div>
      <Title :title="greeting"/>
      <RouterView @response="(msg) => greeting = msg"/>
      <div v-if="history" class="mt-5 ml-auto ease-in-out duration-300 hover:opacity-50 hover:cursor-pointer" @click="router.push('/history')">Смотреть историю</div>
    </div> 
  </div>
</template>

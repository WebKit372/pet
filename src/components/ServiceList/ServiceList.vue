<script setup lang="ts">
import Service from './ServiceElement.vue';
import uslugi from '../../utils/Services';          
const srv:Object= {
    "shortName": "Сокращённое наименование",  
    "serviceCode": "Сервисный код",
    "statusCode": "Статус" 
}
import { useRouter } from 'vue-router';
const router = useRouter();
function toService(item){
    router.push(`/service/${item.serviceCode}`)
  }
</script>
<template>
    <ul class="bg-white text-center rounded-2xl pt-5 max-w-5xl w-full mt-5 px-4">
        <li class="font-semibold  border-slate-300 border-b pt-6 pb-10">
        <Service :srv="srv"/>
        </li>
        <li  v-for="(item) in uslugi" :key="item.serviceCode" @click="toService(item)" class="border-solid border-slate-300 border-b py-4 ease-in-out duration-300  hover:bg-gray-300 last-of-type:border-none cursor-pointer">
            <Service :srv="item"/>
        </li>
    </ul>
</template>
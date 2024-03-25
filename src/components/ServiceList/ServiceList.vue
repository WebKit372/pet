<script setup>
import Service from './ServiceListItems/Service.vue';
const props = defineProps({
  services: Array,
})
const srv = {
    "shortName": "Сокращённое наименование",
    "serviceCode": "Сервисный код",
    "statusCode": "Статус" 
}
import uslugi from '../../utils/Services'
</script>
<template>
    <ul class="bg-white text-center rounded-2xl p-5 max-w-5xl w-full">
        <li class="mb-5 font-semibold  border-slate-300 border-b pt-6 pb-10">
        <Service :srv="srv"/>
        </li>
        <li  v-for="(item) in uslugi" class="border-solid border-slate-300 border-b py-4">
            <Service :srv="item"/>
        </li>
    </ul>
   </template>
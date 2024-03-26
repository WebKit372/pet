<script setup>
import Service from './Service.vue';
import uslugi from '../../utils/Services';
const props = defineProps({
  services: Array,
})
const srv = {
    "shortName": "Сокращённое наименование",
    "serviceCode": "Сервисный код",
    "statusCode": "Статус" 
}
</script>
<template>
    <ul class="bg-white text-center rounded-2xl pt-5 max-w-5xl w-full mt-5">
        <li class="font-semibold  border-slate-300 border-b pt-6 pb-10">
        <Service :srv="srv"/>
        </li>
        <li  v-for="(item) in uslugi" class="border-solid border-slate-300 border-b py-4 ease-in-out duration-300  hover:bg-gray-300 last-of-type:rounded-b-2xl cursor-pointer">
            <Service :srv="item"/>
        </li>
    </ul>
</template>
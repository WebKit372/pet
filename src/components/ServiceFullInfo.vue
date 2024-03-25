<script setup>
import Service from './Service/Service.vue';
const props = defineProps({
  usluga: Object
})
const srv = {
    "shortName": "Сокращённое наименование",
    "serviceCode": "Сервисный код",
    "statusCode": "Статус" 
}
</script>
<template>
    <ul class="bg-white text-center rounded-2xl pt-5 max-w-5xl w-full">
        <li class="font-semibold  border-slate-300 border-b pt-6 pb-10">
            <Service :srv="srv"/>
        </li>
        <li class="border-solid border-slate-300 border-b py-4 ease-in-out duration-300  hover:bg-gray-300 last-of-type:rounded-b-2xl cursor-pointer">
            <Service :srv="usluga"/>
        </li>
    </ul>
</template>
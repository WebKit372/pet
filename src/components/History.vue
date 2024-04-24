<script setup>

const props = defineProps({
  srv: Object,
});           
const srv = {
    "shortName": "Сокращённое наименование",  
    "serviceCode": "Сервисный код",
    "statusCode": "Статус" 
}
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
function toService(item){
    router.push(`/service/${item.serviceCode}`)
  }
</script>
<template>
    <ul class="bg-white text-center rounded-2xl pt-5 max-w-5xl w-full mt-5">
        <li class="font-semibold  border-slate-300 border-b pt-6 pb-10">
        </li>
    </ul>
</template>
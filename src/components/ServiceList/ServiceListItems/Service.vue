<script setup>
const props = defineProps({
  srv: Object,
})
</script>
<template>
        <div class="flex justify-between">
            <h3 class="w-full">{{ srv.shortName }}</h3>
            <h3 class="w-full">{{ srv.serviceCode }}</h3>
            <h3 v-if="srv.statusCode === 'Статус'" class="w-full">{{ srv.statusCode }}</h3>
            <div v-else-if="srv.statusCode === 'Done'" class="w-full flex">
                <h3 class="relative w-full before:top-2 before:left-20  before:rounded-full before:absolute before:h-3 before:w-3 before:bg-lime-500">В продуктиве</h3>   
            </div>
        </div>
</template>
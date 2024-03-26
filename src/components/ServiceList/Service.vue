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
            <div v-else class="flex p-auto w-full justify-center">
              <h3 
              class="
                text-nowrap
                w-2/5
                text-left
                relative
                before:top-2
                before:left-20
                before:rounded-full
                before:inline-block
                before:mr-2
                before:h-3
                before:w-3"
              :class="{'before:bg-lime-500':srv.statusCode==='Done', 'before:bg-yellow-300':srv.statusCode==='inProccess', 'before:bg-red-300':srv.statusCode==='Error'}">{{ srv.statusCode==='Done'? 'В продуктиве' : srv.statusCode==='inProccess'? 'В разработке': 'Имеются ошибки'}}
            </h3>   
            </div>
        </div>
</template>
<script setup lang="ts">
  import { Servises } from '../../utils/Interfaces';
  const props = defineProps<{
    srv: Servises
  }>()
</script>
<template>
        <table class="flex justify-between">
            <tr class="w-full">{{ srv.shortName }}</tr>
            <tr class="w-full">{{ srv.serviceCode }}</tr>
            <tr class="flex p-auto w-full justify-center items-center gap-2">
              <div class="rounded-full h-3 w-3 flex justify-end" :class="{'bg-lime-500':srv.statusCode==='Done', 'bg-yellow-300':srv.statusCode==='inProccess', 'bg-red-300':srv.statusCode==='Error'}"></div>
              <p 
              class="text-nowrap w-2/5 text-left">
                {{ srv.statusCode==='Done'? 'В продуктиве' : srv.statusCode==='inProccess'? 'В разработке': 'Имеются ошибки'}}
            </p>   
            </tr>
        </table>
</template>
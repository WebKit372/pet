<script setup lang="ts">
const props = defineProps<{
  element: {
    type: 'default'| 'list'| 'status',
    value: String| String[],
  },
}>()
</script>
<template>
  <tr v-if="props.element.type === 'default'" class="w-full">{{props.element.value}}</tr>
  <tr v-else-if="props.element.type === 'list'" class="w-full" v-for="e in props.element.value">{{ e }}</tr>
  <tr v-else class="flex p-auto w-full justify-center items-center gap-2">
    <div class="rounded-full h-3 w-3 flex justify-end ml-5" :class="{'bg-lime-500':props.element.value==='Done', 'bg-yellow-300':props.element.value==='inProccess', 'bg-red-300':props.element.value==='Error'}"></div>
    <p class="text-nowrap w-2/5 text-left">
    {{ props.element.value==='Done'? 'В продуктиве' : props.element.value==='inProccess'? 'В разработке': 'Имеются ошибки'}}
    </p> 
  </tr>
</template>
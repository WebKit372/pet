<script setup lang="ts">
interface Component {
    type: "ShortInfo"| "FullName"| "Version" | "Changes" | "RKD" | "Curator",
    values: object,
}
defineProps<{
    component: Component
}>()
</script>
<template>
  <div class="bg-white text-center rounded-2xl py-5 max-w-5xl w-full mt-5">
        <div v-if="component.type === 'ShortInfo'" class="flex flex-col">
            <div class="flex flex-row content-between">
                <h3 class="w-full font-semibold">Краткое наименование</h3>
                <h3 class="w-full font-semibold">Сервисный код</h3>
                <h3 class="w-full font-semibold">Статус</h3>
            </div>
            <div class="flex justify-between">
              <h3 class="w-full">{{ component.values['first'] }}</h3>
              <h3 class="w-full">{{ component.values['second']  }}</h3>
              <div class="flex p-auto w-full justify-center">
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
                  :class="{
                    'before:bg-lime-500':component.values['third'] ==='Done',
                    'before:bg-yellow-300':component.values['third'] ==='inProccess',
                    'before:bg-red-300':component.values['third'] ==='Error'}">
                    {{ component.values['third'] ==='Done'?
                    'В продуктиве' :
                    component.values['third']==='inProccess'?
                    'В разработке':
                    'Имеются ошибки'
                    }}
                </h3>
              </div>  
            </div>
        </div>
        <div v-else class="flex flex-row content-between">
            <h3 class="w-full">Статус</h3>
            <h3 class="w-full">Статус</h3>
        </div>
    </div>
</template>
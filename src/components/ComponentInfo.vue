<script setup lang="ts">
import cardHeaders from '../utils/Interfaces';
const props = defineProps<{
    serviceInfo: Object
    cardType: String
}>()
const serviceInfo = props.value.cardInfo
let cardBody: String||Number||String[] [];
if props.value.cardType === 'shortInfo' {
  cardBody = [serviceInfo!.shortName, serviceInfo.serviceCode, serviceInfo.statusCode]
}
</script>
<template>
  <div class="bg-white rounded-2xl p-5 max-w-5xl w-full mt-5" :class="`${cardInfo.type === 'FullName'? '' : 'text-center'}`">
        <table v-if="cardInfo.type === 'ShortInfo'" class="flex flex-col">
            <div class="flex flex-row content-between">
                <th class="w-full font-semibold">Краткое наименование</th>
                <th class="w-full font-semibold">Сервисный код</th>
                <th class="w-full font-semibold">Статус</th>
            </div>
            <div class="flex justify-between">
              <tr class="w-full">{{ cardInfo.values['first'] }}</tr>
              <tr class="w-full">{{ cardInfo.values['second']  }}</tr>

              <tr class="flex p-auto w-full justify-center items-center gap-2">
              <div class="rounded-full h-3 w-3 flex justify-end" :class="{'bg-lime-500':cardInfo.values['third']==='Done', 'bg-yellow-300':cardInfo.values['third']==='inProccess', 'bg-red-300':cardInfo.values['third']==='Error'}"></div>
              <p 
              class="text-nowrap w-2/5 text-left">
                {{ cardInfo.values['third']==='Done'? 'В продуктиве' : cardInfo.values['third']==='inProccess'? 'В разработке': 'Имеются ошибки'}}
            </p>   
            </tr>
            </div>
        </table>
        <table v-else-if="cardInfo.type === 'FullName'" class="flex flex-col">
            <th class="font-semibold mb-2 w-full text-center">Полное наименование</th>
            <tr class="text-center">{{cardInfo.values["fullName"]}}</tr>
        </table>
        <table v-else-if="cardInfo.type === 'Version'" class="flex flex-col ">
          <div class="flex flex-row content-between">
            <th class="w-full font-semibold">Версия на проде</th>
            <th class="w-full font-semibold">Версия в тесте</th>
            <th class="w-full font-semibold">Дата обновления прода</th>
          </div>
          <div class="flex justify-between">
              <tr class="w-full">{{ cardInfo.values['prodVersion'] }}</tr>
              <tr class="w-full">{{ cardInfo.values['prodTest']  }}</tr>
              <tr class="w-full">{{ cardInfo.values['dateUpdate']  }}</tr>
          </div>
        </table>
        <table v-else-if="cardInfo.type === 'RKD'" class="flex flex-col ">
          <div class="flex flex-row content-between">
            <th class="w-full font-semibold">Номер заявки на РДК</th>
            <th class="w-full font-semibold">Номер заявки на обновление прода</th>
            <th class="w-full font-semibold">Дата обновления прода</th>
          </div>
          <div class="flex justify-between">
              <tr class="w-full">{{ cardInfo.values['rdk'] }}</tr>
              <tr class="w-full">{{ cardInfo.values['prodUpdate']  }}</tr>
              <tr class="w-full">{{ cardInfo.values['dateUpdate']  }}</tr>
          </div>
        </table>
        <table v-else-if="cardInfo.type === 'Changes'" class="flex flex-col">
            <th class="font-semibold mb-2 w-full">Список изменений</th>
            <ul class="flex gap-5 justify-center">
              <li class="list-none italic" v-for="(change) in cardInfo.values['changes']">{{change}}</li>
            </ul>
        </table>
    </div>
</template>
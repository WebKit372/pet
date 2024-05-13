<script setup lang="ts">
import cardHeaders from '../../utils/ComponentConfig';
import { Servises } from '../../utils/Interfaces';
import CardValueComponent from './CardValueComponent.vue';
type cardAttributesType = {
  "values": {
    type: 'default'| 'list'| 'status',
    value: String| String[]
  }[],
  "titles": String[],
  "type": "shortInfo"|"fullName"|"version"|"rdk"|"changes"
}
const props = defineProps<{
    serviceInfo: Servises
    cardType: "shortInfo"|"fullName"|"version"|"rdk"|"changes"
}>()
const serviceInfo: Servises = props.serviceInfo;
const cardsTypeKeys:Object = {
  'shortInfo': [
    {value: serviceInfo.shortName, type: "default"},
    {value: serviceInfo.serviceCode, type: "default"},
    {value: serviceInfo.statusCode, type: "status"},
  ],
  'fullName': [
    {value: serviceInfo.fullName, type: "default"},
  ],
  'version': [
    {value: serviceInfo.prodVersion, type: "default"},
    {value: serviceInfo.prodTest, type: "default"},
    {value: serviceInfo.dateUpdate, type: "default"},
  ],
  'rdk': [
    {value: serviceInfo.rdk, type: "default"},
    {value: serviceInfo.prodUpdate, type: "default"},
    {value: serviceInfo.dateUpdate, type: "default"},
  ],
  'changes': [
    {value: serviceInfo.changes, type: "list"},
  ]
}
let cardAttributes: cardAttributesType = {
  values: [],
  titles: [],
  type: props.cardType
}
for (let i = 0; i < cardHeaders[props.cardType].length; i++){
  cardAttributes.values.push(cardsTypeKeys[props.cardType][i]);
  cardAttributes.titles.push(cardHeaders[props.cardType][i]);
}
</script>
<template>
  <div class="bg-white rounded-2xl p-5 max-w-5xl w-full mt-5 flex flex-row justify-center">
    <div class="flex flex-row justify-between w-full">
        <table class="flex flex-col w-full text-center" v-for="(element) in cardAttributes.titles.length" :key="element">
            <th class="font-semibold mb-2 w-full text-center">{{ cardAttributes.titles[element-1] }}</th>
            <CardValueComponent :element = "cardAttributes.values[element-1]"/>
        </table>  
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Servises } from '../utils/Interfaces'
import ComponentInfo from './ComponentInfo/ComponentInfo.vue';
import Service from '../utils/Services';
const route = useRoute();
const serviceCode: number = +route.params.code;
function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}
const usluga:Servises = ensure(Service.find((e) => e.serviceCode === serviceCode))
const emit = defineEmits(['response'])
emit(
    'response',
    usluga?.shortName
)
</script>
<template>
        <ComponentInfo :serviceInfo="usluga" cardType="shortInfo"/>
        <ComponentInfo :serviceInfo="usluga" cardType="fullName"/>
        <ComponentInfo :serviceInfo="usluga" cardType="version"/>
        <ComponentInfo :serviceInfo="usluga" cardType="rdk"/>
        <ComponentInfo :serviceInfo="usluga" cardType="changes"/>
</template>
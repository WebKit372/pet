<script setup lang="ts">
import { useRoute } from 'vue-router'
import ComponentInfo from './ComponentInfo.vue';
import Service from '../utils/Services';
const route = useRoute();
const serviceCode: number = route.params.code * 1;
const usluga = Service.find( (e) => e.serviceCode === serviceCode)
const shortInfo = {
    type: "ShortInfo",
    values: {"first":usluga.shortName,"second": usluga.serviceCode,"third": usluga.statusCode}
}
const pop = {
    type: "qweqwe",
    values: [{"k":"qwe"}]
}
</script>
<template>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="pop"/>
</template>
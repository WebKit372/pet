<script setup lang="ts">
import { useRoute } from 'vue-router'
import { CardInfo } from '../utils/Interfaces'
import ComponentInfo from './ComponentInfo.vue';
import Service from '../utils/Services';
const route = useRoute();
const serviceCode: number = +route.params.code;

const usluga = Service.find( (e) => e.serviceCode === serviceCode)
const shortInfo: CardInfo = {
    type: "ShortInfo",
    values: {"first": usluga!.shortName,"second": usluga!.serviceCode,"third": usluga!.statusCode}
}
const FullName: CardInfo = {
    type: "FullName",
    values: {"fullName":usluga!.fullName}
}
const Version: CardInfo = {
    type: "Version",
    values: {"prodVersion":usluga!.prodVersion, "prodTest":usluga!.prodTest, "dateUpdate": usluga!.dateUpdate}
}
const RKD: CardInfo = {
    type: "RKD",
    values: {"rdk":usluga!.rdk, "prodUpdate":usluga!.prodUpdate, "dateUpdate": usluga!.dateUpdate}
}
const Changes: CardInfo = {
    type: "Changes",
    values: {"changes":usluga!.changes}
}
const emit = defineEmits(['response'])
emit(
    'response',
    usluga?.shortName
)
</script>
<template>
        <ComponentInfo :serviceInfo="shortInfo"/>
        <ComponentInfo :serviceInfo="FullName"/>
        <ComponentInfo :serviceInfo="Version"/>
        <ComponentInfo :serviceInfo="RKD"/>
        <ComponentInfo :serviceInfo="Changes"/>
</template>
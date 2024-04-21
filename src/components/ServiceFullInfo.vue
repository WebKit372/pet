<script setup lang="ts">
import { useRoute } from 'vue-router'
import ComponentInfo from './ComponentInfo.vue';
import Service from '../utils/Services';
const route = useRoute();
const serviceCode: number = +route.params.code;
const usluga = Service.find( (e) => e.serviceCode === serviceCode)
interface Component {
    type: "ShortInfo"| "FullName"| "Version" | "Changes" | "RKD" | "Curator",
    values: object,
}
const shortInfo: Component = {
    type: "ShortInfo",
    values: {"first": usluga!.shortName,"second": usluga!.serviceCode,"third": usluga!.statusCode}
}
const FullName: Component = {
    type: "FullName",
    values: {"fullName":usluga!.fullName}
}
const Version: Component = {
    type: "Version",
    values: {"prodVersion":usluga!.prodVersion, "prodTest":usluga!.prodTest, "dateUpdate": usluga!.dateUpdate}
}
const RKD: Component = {
    type: "RKD",
    values: {"rdk":usluga!.rdk, "prodUpdate":usluga!.prodUpdate, "dateUpdate": usluga!.dateUpdate}
}
const Changes: Component = {
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
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="FullName"/>
        <ComponentInfo :component="Version"/>
        <ComponentInfo :component="RKD"/>
        <ComponentInfo :component="Changes"/>
</template>
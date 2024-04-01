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
    values: {"fullName": 'qwoijqwoifjqwoifjqwoifjqiwo'}
}
const pop: Component = {
    type: "ShortInfo",
    values: {"k":"qwe"}
}
</script>
<template>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="FullName"/>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="shortInfo"/>
        <ComponentInfo :component="pop"/>
</template>
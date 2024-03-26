<script setup>
import ComponentInfo from './ComponentInfo.vue';
const props = defineProps({
  usluga: Object
})
const comp = {
    type: "ShortInfo",
    values: [{"k":"qwe"}]
}
const pop = {
    type: "qweqwe",
    values: [{"k":"qwe"}]
}
</script>
<template>
    <div class="bg-white text-center rounded-2xl pt-5 max-w-5xl w-full mt-5">
        <ComponentInfo :component="comp"/>
        <ComponentInfo :component="comp"/>
        <ComponentInfo :component="comp"/>
        <ComponentInfo :component="comp"/>
        <ComponentInfo :component="pop"/>
    </div>
</template>
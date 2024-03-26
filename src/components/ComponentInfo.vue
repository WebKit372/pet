<script setup lang="ts">
interface Component {
    type: "ShortInfo"| "FullName"| "Version" | "Changes" | "RKD" | "Curator",
    values: object[],
}
const props = defineProps<{
    component: Component
}>()
</script>
<template>
    <div>
        <div v-if="component.type === 'ShortInfo'" class="flex flex-row content-between">
            <h3 class="w-full">Краткое наименование</h3>
            <h3 class="w-full">Сервисный код</h3>
            <h3 class="w-full">Статус</h3>
        </div>
        <div v-else class="flex flex-row content-between">
            <h3 class="w-full">Статус</h3>
            <h3 class="w-full">Статус</h3>
        </div>
    </div>
</template>
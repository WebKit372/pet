<script setup lang="ts">
import {tableTitlesInterface} from '../../utils/Interfaces' 
const props = defineProps<{
  tableTitles: tableTitlesInterface,
}>()
</script>
<template>
        <table class="flex justify-between">
            <tr class="w-full">{{ tableTitles.shortName }}</tr>
            <tr class="w-full">{{ tableTitles.serviceCode }}</tr>
            <tr class="w-full">{{ tableTitles.statusCode }}</tr>
        </table>
</template>
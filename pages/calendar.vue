<template>

    <div class="p-4">
        <Calendar v-model="value" :weekday-format="'short'" class="rounded-md border max-w-fit" />

    </div>
</template>

<script lang="ts" setup>
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>
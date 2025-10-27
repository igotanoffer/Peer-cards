<template>
    <div class="vue-filters">
        <div class="vue-filters-label">Filter peers available on:</div>
        <div class="vue-filters-days">
            <div v-for="day in dayOptions" :key="day" @click="onClickDay(day as DayOption)" class="vue-filters-day"
                :class="{ 'vue-filters-day--selected': isDaySelected(day as DayOption) }">
                {{ day }}
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { DayOption } from '../types/common';

const props = defineProps<{
    selectedDays: DayOption[];
}>();
const emit = defineEmits<{
    (e: 'selectDay', day: DayOption): void;
}>();

const dayOptions: DayOption[] = [
    'All',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
]

const isDaySelected = (day: DayOption) => {
    return props.selectedDays.includes(day);
}

const onClickDay = (day: DayOption) => {
    emit('selectDay', day);
}
</script>

<style scoped lang="scss">
.vue-filters {
    text-transform: uppercase;
}

.vue-filters-label {
    font-size: 12px;
    font-weight: bold;
    line-height: 1.67;
    color: #aaa;
}

.vue-filters-days {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.vue-filters-day {
    padding: 6px 12px;
    background-color: #fff;
}

.vue-filters-day--selected {
    border: 1px solid #498fe4;
}
</style>
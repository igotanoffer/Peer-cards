<template>
    <div>
        <div class="vue-app-header" />

        <div class="vue-app-content">
            <div class="vue-app-content-heading">Hi Patrik, schedule your next practice session with a peer</div>

            <VueFilters :selectedDays="selectedDays" @selectDay="onSelectDay" />

            <div>
                <VuePeerCard v-for="peer in peers" :key="peer.name" :peer="peer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VuePeerCard from './VuePeerCard.vue';
import { data } from '../data';
import VueFilters from './VueFilters.vue';
import { ref } from 'vue';
import type { DayOption } from '../types/common';

const peers = ref(data);
const selectedDays = ref<DayOption[]>(['All']);

const onSelectDay = (day: DayOption) => {
    console.log('onSelectDay', day);
}
</script>

<style scoped lang="scss">
.vue-app-header {
    height: 70px;
    background-color: #498fe4;
}

.vue-app-content {
    padding: 30px 80px;
    background-color: #fbfbfb;
}

.vue-app-content-heading {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.1px;
    color: #333;
}
</style>
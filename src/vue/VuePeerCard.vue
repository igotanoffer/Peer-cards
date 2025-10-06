<template>
    <div class="vue-peer-card">
        <div>{{ peer.name }}</div>
    </div>
</template>


<script setup lang="ts">
import type { Peer } from '../types/Peer';


defineProps<{
    peer: Peer;
}>();

</script>

<style scoped lang="scss">
.vue-peer-card {
    background-color: #fff;
    padding: 16px;
    display: inline-block;
}
</style>
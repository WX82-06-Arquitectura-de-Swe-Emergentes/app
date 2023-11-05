<script setup lang="ts">
import TripService from "~/booking/service/tripService";

const data = await TripService.getMany();

</script>

<template>
  <p class="text-white">
  </p>
</template>

<style scoped>

</style>
<script setup lang="ts">
import TripService from "~/modules/booking/service/tripService";

const data = await TripService.getMany();


</script>

<template>
  <p class="text-white">
    {{ data }}
  </p>
</template>

<style scoped>

</style>
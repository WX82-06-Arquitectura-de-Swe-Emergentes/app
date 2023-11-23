<script setup lang="ts">
import TripService from "~/modules/travel_design/services/tripService";

const route = useRoute()

const response = await TripService.generateToken()

console.log(response.access_token)

const flights = await TripService.getTrips(
    route.query.origin,
    route.query.destination,
    route.query.departureDate,
    route.query.returnDate,
    route.query.adults,
    route.query.children,
    route.query.babies,
    response.access_token
)

console.log(flights)

</script>

<template>

  <div class="w-full p-10 text-white">
    <div>
      <h1 class="text-white text-4xl mb-10 ">Busqueda de vuelos</h1>
      <div class="flex justify-between">
        <div class="text-5xl">
          Origen 🛫 {{route.query.origin}}
        </div>
        <span class="text-6xl">
          ➡️
        </span>
        <div class="text-5xl">
          Destino 🛬 {{route.query.destination}}
        </div>
      </div>
      <div class="grid place-items-center p-10">
        {{flights}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<template>
  <Public>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
    <!-- Iterar a través del array de ejemplos de tours -->
    <PackageCard v-for="tour in exampleTours" :key="tour.id" :tour="tour" />
  </div>
<!-- <PackageCard
      :tour="{
        id: '1',
        name: 'Tour de la Ciudad',
        description: 'Descubre los lugares más emblemáticos de la ciudad.',
        start_date: '2023-01-01',
        end_date: '2023-01-07',
        price: '150',
        rating: '4.5',
        status: 'Cerrado',
        // Agrega más propiedades según sea necesario
      }"
    /> -->
    
  </Public>
</template>


<script setup lang="ts">

import Public from "~/layouts/public.vue";
import {definePageMeta} from "#imports";
import PackageCard from '~/components/PackageCard.vue';




definePageMeta({
  layout: false,
})

const exampleTours = ref([
  {
    id: '1',
    name: 'Tour de la Ciudad',
    description: 'Descubre los lugares más emblemáticos de la ciudad.',
    start_date: '2023-01-01',
    end_date: '2023-01-07',
    price: '150',
    rating: '4.5',
    status: 'Cerrado',
    image: 'https://www.lima2019.pe/sites/default/files/2019-07/iStock-458584553.jpg',
  },
    {
    id: '2',
    name: 'Tour de la Ciudad 2',
    description: 'Descubre los lugares más emblemáticos de la ciudad 2',
    start_date: '2023-01-01',
    end_date: '2023-01-07',
    price: '150',
    rating: '4.5',
    status: 'Cerrado',
    image: 'https://www.lima2019.pe/sites/default/files/2019-07/iStock-458584553.jpg',
  },
]);



</script>
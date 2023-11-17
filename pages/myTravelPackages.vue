<template>
  <Public>
<PackageCard
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
    />
  </Public>
</template>


<script setup lang="ts">

import Public from "~/layouts/public.vue";
import {definePageMeta} from "#imports";
import PackageCard from '~/components/PackageCard.vue';



definePageMeta({
  layout: false,
})



</script>
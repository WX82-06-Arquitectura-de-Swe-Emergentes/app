<template>
    <div class="bg-gray-900 h-full flex flex-col justify-between">
      <header class="bg-gray-900 text-white p-4">
        <h1 class="text-xl font-semibold">Actividades</h1>
      </header>
      <main class="flex-1 overflow-y-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
    <!-- Iterar a través del array de ejemplos de tours -->
    <PackageCard v-for="tour in tours" :key="tour.name" :tour="tour" />
  </div>
        </main>
    </div>
</template>
  





<script setup lang="ts">
import {definePageMeta} from "#imports";
import PackageCard from '~/components/PackageCard.vue';

definePageMeta({
  layout: false,
})

const tours =ref([]);
const fetchTours = async () =>{
  const {data,error} = await useFetch(`https://api.turismoi.com/api/tours?page%5Bpage%5D=1&page%5Bper_page%5D=10`, {
    method: "GET",
    headers: {
      "Content-Type":"application/vnd.api+json",
      "accept":"application/vnd.api+json",
      "Accept-Search-Filters":"yes",
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyZXNlbGxlcl9lbWFpbCI6ImFwYWRpbGxhK3BydWViYWRldkB0dXJpc21vaS5jb20ifQ.ICmqJen12eyoyNfKlMoSkZG5yffULVVNBalbqztFxoU'
    }
  })

  tours.value = data?.value?.data?.map((res:any)=>res.attributes) || []

};

fetchTours()


</script>
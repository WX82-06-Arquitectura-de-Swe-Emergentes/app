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


const tours =ref([]);

const fetchTours = async () =>{
  console.log('test')
  const {data,error} = await useFetch(`https://api.turismoi.com/api/tours?page%5Bpage%5D=1&page%5Bper_page%5D=10`, {
    method: "GET",
    headers: {
      "Content-Type":"application/vnd.api+json",
      "accept":"application/vnd.api+json",
      "Accept-Search-Filters":"yes",
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyZXNlbGxlcl9lbWFpbCI6ImFwYWRpbGxhK3BydWViYWRldkB0dXJpc21vaS5jb20ifQ.ICmqJen12eyoyNfKlMoSkZG5yffULVVNBalbqztFxoU'
    }
  })


  console.log('data.value',data?.value)
  console.log('Response',error.value)

  tours.value = data?.value?.data?.map((res:any)=>res.attributes) || []
  // if (response.ok) {
  //   return response.json()
  // } else {
  //   throw new Error(response.toString())
  // }
};




definePageMeta({
  layout: false,
})

onMounted(() => {
  // Llama a fetchTours cuando el componente se monta
  console.log('Api fetcdf aasdsdsadfh')
  fetchTours();
});

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
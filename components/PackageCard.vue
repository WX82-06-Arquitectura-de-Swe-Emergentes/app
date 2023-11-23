<template>
  <div class="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl overflow-hidden shadow-md md:max-w-2xl lg:max-w-full " style="height: min-content;">
    <div class="md:flex">

      <div class="md:ml-4 md:flex-grow">
    <div class="p-4">
      <p class="text-xl font-bold text-gray-900 dark:text-gray-300">{{ tour.name }}</p>
      <div class="image-container">
        <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-4 md:mx-0 md:mt-0" :src="tour.principal_photo" alt="Imagen del paquete turístico">
      </div>
    </div>
  </div>


      <div class="md:ml-4 md:flex-grow">
        <div class="p-4">
          <p class=" text-xl font-bold text-gray-900 dark:text-gray-300 pb-3">{{ tour.name }}</p>
                <div v-html="tour.description" class="pb-2 text-gray-700 dark:text-gray-400"></div>

        </div>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="border-t border-gray-200 dark:border-gray-700 p-4 grid grid-cols-4 gap-4">
      <!-- Columna Rating -->
      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Rating</p>
        <div class="flex items-center mb-2 justify-center">
          <span class="text-yellow-500">★</span>
          <p class="ml-1 text-gray-700 dark:text-gray-400">{{ tour.ratings_average }}  /5</p>
        </div>
      </div>

      <!-- Columna Price -->
      <div class="text-center justify-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Price</p>
        <div class="flex items-center mb-2 justify-center">
          <span class="text-green-500">$</span>
          <p class="ml-1 text-gray-700 dark:text-gray-400">{{ tour.dolar_price }}</p>
        </div>
      </div>



      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Duración</p>
        <p class="text-gray-700 dark:text-gray-400">{{ tour.days }} días / {{ tour.nights }} noches</p>
      </div>


      <div class="text-center">
  <p class="font-semibold text-gray-600 dark:text-gray-400">Incluye Tour</p>
  <p class="text-gray-700 dark:text-gray-400">{{ tour.has_tour ? '✔' : '✘' }}</p>
</div>

<div class="text-center">
  <p class="font-semibold text-gray-600 dark:text-gray-400">Incluye Hospedaje</p>
  <p class="text-gray-700 dark:text-gray-400">{{ tour.has_housing ? '✔' : '✘' }}</p>
</div>

<div class="text-center">
  <p class="font-semibold text-gray-600 dark:text-gray-400">Incluye Transporte</p>
  <p class="text-gray-700 dark:text-gray-400">{{ tour.has_transport ? '✔' : '✘' }}</p>
</div>



<div class="text-center justify-center">
  <p class="font-semibold text-gray-600 dark:text-gray-400">Lenguajes</p>
  <ul class="list-none text-gray-700 dark:text-gray-400">
    <li v-for="language in tour.languages" :key="language">{{ language }}</li>
  </ul>
</div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['tour']);

</script>


<style scoped>
/* Establece el tamaño deseado para todas las imágenes dentro de .image-container */
.image-container img {
  width: 200px; /* Tamaño deseado para las imágenes */
  height: 160px; /* Tamaño deseado para las imágenes */
}
</style>
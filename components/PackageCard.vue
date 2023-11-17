<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl overflow-hidden shadow-md md:max-w-2xl lg:max-w-full">
    <div class="md:flex">
      <!-- Image Container-->
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-4 md:mx-0 md:mt-0" :src="tour.image" alt="Imagen del paquete turístico">
      
      <!-- Card Body Container -->
      <div class="md:ml-4 md:flex-grow">
        <div class="p-4">
          <p class="text-xl font-bold text-gray-900 dark:text-gray-300">{{ tour.name }}</p>
          <p class="text-gray-700 dark:text-gray-400">{{ tour.description }}</p>
        </div>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
      <!-- Columna Rating -->
      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Rating</p>
        <div class="flex items-center mb-2">
          <span class="text-yellow-500">★</span>
          <p class="ml-1 text-gray-700 dark:text-gray-400">{{ tour.rating }}/5</p>
        </div>
      </div>

      <!-- Columna Price -->
      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Price</p>
        <div class="flex items-center mb-2">
          <span class="text-green-500">$</span>
          <p class="ml-1 text-gray-700 dark:text-gray-400">{{ tour.price }}</p>
        </div>
      </div>

      <!-- Columna Status -->
      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Status</p>
        <div class="flex items-center mb-2">
          <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <p class="text-gray-700 dark:text-gray-400">{{ tour.status }}</p>
        </div>
      </div>

      <!-- Columna Date -->
      <div class="text-center">
        <p class="font-semibold text-gray-600 dark:text-gray-400">Date</p>
        <p class="text-gray-700 dark:text-gray-400">Fecha: {{ tour.start_date }} - {{ tour.end_date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['tour']);

</script>



<template>
  <section class="w-full h-full grid place-items-center bg-primary">
    <div class="overflow-hidden rounded-lg border border-rose-400 shadow-[0_35px_1200px_-15px_rgba(255,0,0,0.3)] w-4/5">
      <div class="px-4 py-5 sm:p-6">
        <h1 class="text-2xl text-white">Vuelos al mejor precio</h1>
        <form  @submit.prevent="onSubmit">
          <div class="w-full flex flex-col p-10 justify-between">
            <div class="flex">
              <div class="w-1/2 px-5">
                <label for="from" class="block text-sm font-medium text-white">Origen</label>
                <input v-model="origin" type="text" name="from" id="from" placeholder="Origen" class="p-2 mt-1 focus:ring-rose-400 focus:border-rose-400 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border text-white">
                <div class="h-5"></div>
                <label for="from" class="block text-sm font-medium text-white">Fecha ida</label>
                <input v-model="departureDate" type="date" name="from" id="from" placeholder="Elegir fecha" class="p-2 mt-1 focus:ring-rose-400 focus:border-rose-400 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border text-white">
              </div>
              <div class="w-1/2 px-5">
                <label for="from" class="block text-sm font-medium text-white">Destino</label>
                <input v-model="destination" type="text" name="from" id="from" placeholder="Destino" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border text-white">
                <div class="h-5"></div>
                <label for="from" class="block text-sm font-medium text-white">Fecha vuelta</label>
                <input v-model="returnDate" type="date" name="from" id="from" placeholder="Elegir fecha" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border text-white">
              </div>
            </div>

            <div class="px-10 mt-5 flex w-full justify-between text-white">
              <div class="w-1/3 px-10">
                <span class="text-sm">Adultos</span>
                <select v-model="adults" name="adults" id="adults" class="p-2 mt-1 focus:ring-rose-400 focus:border-rose-400 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border rounded-md">
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div class="w-1/3 px-10">
                <span class="text-sm">Niños</span>
                <select v-model="children" name="adults" id="adults" class="p-2 mt-1 focus:ring-rose-400 focus:border-rose-400 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border rounded-md">
                  <option selected value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div class="w-1/3 px-10">
                <span class="text-sm">Bebes</span>
                <select v-model="babies" name="adults" id="adults" class="p-2 mt-1 focus:ring-rose-400 focus:border-rose-400 block w-full shadow-sm sm:text-sm border-rose-400 rounded-md bg-primary border rounded-md">
                  <option selected value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>

            <div class="px-20 mt-5">
              <button :disabled="!isFormValid" class="w-full bg-rose-400 disabled:bg-gray-700 disabled:text-gray-400 text-white p-2 rounded-md">Buscar Vuelo</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import {navigateTo} from "#app";

const origin = ref('');
const destination = ref('');

const departureDate = ref('');
const returnDate = ref('');

const adults = ref(0);
const children = ref(0);
const babies = ref(0);

watch([origin, destination, departureDate, returnDate, adults, children, babies], () => {
  validateForm();
})

const validateForm = () => {
  if (!origin.value || !destination.value || !departureDate.value || !returnDate.value) {
    return false;
  }

  const departureDateObj = new Date(departureDate.value);
  const returnDateObj = new Date(returnDate.value);
  const today = new Date();

  return !(origin.value === destination.value || departureDateObj >= returnDateObj || departureDateObj <= today);
}

const isFormValid = computed(() => validateForm());
const onSubmit = async () => {
  // Perform form submission logic if the form is valid
  if (isFormValid.value) {
    // Your form submission logic here
    navigateTo(
      `/trips/search?origin=${origin.value}&destination=${destination.value}&departureDate=${departureDate.value}&returnDate=${returnDate.value}&adults=${adults.value}&children=${children.value}&babies=${babies.value}`
    )
  } else {
    alert('Form is not valid. Please correct the errors.');
  }
};

</script>
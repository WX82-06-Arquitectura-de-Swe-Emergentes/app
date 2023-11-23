<template>
  <Public>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="../assets/images/logo.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Inicia sesión en tu cuenta</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="login" class="space-y-6" action="#" method="POST">

          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-white">Nombre de Usuario (*)</label>
            <div class="mt-2">
              <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="true" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-white">Correo Electrónico (*)</label>
            <div class="mt-2">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="true" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-white">Contraseña (*)</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <div class="mt-2">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button :disabled="loading" type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              {{ loading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
            </button>
          </div>
        </form>

        <p v-if="errorMessage" class="mt-4 text-center text-sm text-red-500">{{ errorMessage }}</p>

        <p class="mt-10 text-center text-sm text-gray-400">
          ¿No eres miembro?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Comienza una prueba gratuita de 14 días</a>
        </p>
      </div>
    </div>
  </Public>
</template>


<script setup lang="ts">

import Public from "~/layouts/public.vue";
import {definePageMeta} from "#imports";
  import { ref } from 'vue';

definePageMeta({
  layout: false,
})


const loading = ref(false);
const errorMessage = ref('');

const email = ref('');
const password = ref('');
const username = ref('');


const login = async () => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const usernameValue = username.value;

  if (!emailValue || !passwordValue || !usernameValue) {
    errorMessage.value = 'Por favor, completa todos los campos.';
    return;
  }

  loading.value = true;
  try {
    const { data, error } = await useFetch('https://adventure-hub.azurewebsites.net/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: emailValue,
        password: passwordValue,
        role: 'TRAVELER',

      },
    });

    if (error) {
      errorMessage.value = error.value?.message || 'Ha ocurrido un error durante el inicio de sesión. Intente de nuevo';
      return;
    }

    console.log('Inicio de sesión exitoso:', data);
    // Redirige a la página después del inicio de sesión exitoso
    // route.push('/dashboard');
  } catch (err) {
    console.error(err);
    errorMessage.value = 'Error durante el inicio de sesión. Por favor, inténtalo de nuevo.';
  } finally {
    loading.value = false;
  }
};
</script>
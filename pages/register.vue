<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-auto w-1/5" src="../assets/images/logo.png" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="register" class="space-y-6" action="#" method="POST">

        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-white">Nombre de Usuario (*)</label>
          <div class="mt-2">
            <input v-model="username" id="username" name="username" type="text" autocomplete="username"
                   class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Correo Electronico (*)</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email"
                   class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white">Contraseña (Min 8 caracteres)
              (*)</label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                   class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="repeatPassword" class="block text-sm font-medium leading-6 text-white">Repetir Contraseña
              (*)</label>
          </div>
          <div class="mt-2">
            <input v-model="repeatPassword" id="repeatPassword" name="repeatPassword" type="password"
                   autocomplete="current-password"
                   class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <button :disabled="loading" type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <NuxtLink to="/SuccessModal">{{ loading ? 'Registrandooo...' : 'Registrarse' }}</NuxtLink>
          </button>
        </div>
      </form>
      <p v-if="errorMessage" class="mt-4 text-center text-sm text-red-500">{{ errorMessage }}</p>

      <!-- <p class="mt-10 text-center text-sm text-gray-400">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
      </p> -->
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const route = useRoute()
const loading = ref(false);
const errorMessage = ref('');

const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const username = ref('');


const register = async () => {
  const emailValue = email.value
  const passwordValue = password.value
  const repeatPasswordValue = repeatPassword.value
  const usernameValue = username.value

  if (!emailValue || !passwordValue || !repeatPasswordValue || !username) {
    errorMessage.value = 'Please fill in all fields.';
    return;
  }

  if (passwordValue !== repeatPasswordValue) {
    errorMessage.value = 'Passwords do not match.';
    return;
  }

  loading.value = true;
  try {
    const {data, error} = await useFetch('https://adventure-hub.azurewebsites.net/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: emailValue,
        password: passwordValue,
        role: 'TRAVELER',
        username: usernameValue

      },
    });
    console.log('data', data);
    console.log('error', error);

    if (error) {
      errorMessage.value = error.value?.message || 'Ha ocurrido un error durante el registro. Intente de nuevo';
      return;
    }

    console.log('My response', data);
    // route.push('/SuccessModal');
  } catch (err) {
    console.error(err);
    errorMessage.value = 'Error during registration. Please try again.';
  } finally {
    loading.value = false;
  }
}

</script>
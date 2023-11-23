<template>
  <Public>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="../assets/images/logo.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="onSubmit" class="space-y-6">
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
            <div class="mt-2">
              <input v-model="email" id="email" name="email" autocomplete="email" required="" class="block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-400">
          Not a member?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  </Public>
</template>


<script setup lang="ts">

import Public from "~/layouts/public.vue";
import {definePageMeta} from "#imports";
import { ref } from 'vue';
import {signIn} from "#auth";

definePageMeta({
  layout: false,
})

const email = ref('');
const password = ref('');

const onSubmit = async () => {
  await signIn("credentials", {
    email: email.value,
    password: password.value,
    callbackUrl: "/"
  })
};
</script>
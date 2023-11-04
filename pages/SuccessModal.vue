<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Registration Successful</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p class="text-center text-lg text-gray-400">
          Please log in to access your account.
        </p>
  
        <button class="mt-6 w-full px-3 py-1.5 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <NuxtLink to="/login">Go to Login</NuxtLink>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
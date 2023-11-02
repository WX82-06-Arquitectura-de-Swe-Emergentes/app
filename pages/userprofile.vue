<template>
    <div class="min-h-screen flex items-center justify-center bg-background flex-col">
      <img class="h-16 w-16 rounded-full mb-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Profile Picture" />
      <h1 class="text-white text-2xl font-semibold mb-2">John Doe</h1>
      <p class="text-gray-400 mb-6">Traveler</p>
  
      <div class="bg-card p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-white text-lg font-semibold mb-4">User Information</h2>
        <div class="flex items-center mb-4">
          <span class="text-gray-400 mr-2">Email:</span>
          <span class="text-white">john.doe@example.com</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-400 mr-2">Phone:</span>
          <span class="text-white">+1 (123) 456-7890</span>
        </div>
      </div>
  
      <button @mouseover="hovered = true" @mouseleave="hovered = false" :class="{ 'bg-button-hover': hovered, 'bg-button': !hovered }" class="mt-8 p-2 rounded-md text-white">Edit Profile</button>
    </div>
  </template>
  
  <script setup>
  const data = {
    hovered: false,
  };
  </script>
  
  <style scoped>
  .bg-background {
    background-color: #10141E;
  }
  
  .bg-card {
    background-color: #161D2F;
  }
  
  .bg-button {
    background-color: #FC4747;
  }
  
  .bg-button-hover {
    background-color: #5A698F;
  }
  </style>
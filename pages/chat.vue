<template>
    <div class="bg-gray-900 h-screen flex flex-col justify-between">
      <header class="bg-gray-900 text-white p-4">
        <h1 class="text-xl font-semibold">Chat</h1>
      </header>
      <main class="flex-1 overflow-y-auto p-4">
        <!-- Aquí se mostrarían los mensajes del chat -->
        <div v-for="(message, index) in messages" :key="index" class="mb-4 w-1/2 rounded-md">
          <div :class="messageClass(message)">
            <span class="text-white">{{ message.text }}</span>
          </div>
        </div>
      </main>
      <footer class="bg-gray-800 p-4 flex items-center">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Escribe un mensaje..."
          class="flex-1 py-2 px-4 rounded-full bg-gray-700 text-white focus:outline-none"
        />
        <button
          :class="buttonClass"
          @mouseenter="hoverButton(true)"
          @mouseleave="hoverButton(false)"
          @click="sendMessage"
          class="ml-2 py-2 px-4 rounded-md transition-all duration-300"
        >
          Enviar
        </button>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [], // Aquí se almacenarían los mensajes del chat
        newMessage: '', // Nuevo mensaje a enviar
        buttonHovered: false,
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({
            text: this.newMessage.trim(),
            // Aquí podrías agregar más propiedades como el remitente, la hora, etc.
          });
          this.newMessage = '';
        }
      },
      hoverButton(value) {
        this.buttonHovered = value;
      },
      messageClass(message) {
        return `p-2 rounded-lg ${
          message.isSender ? 'bg-blue-500 self-end text-white' : 'bg-gray-700 self-start'
        }`;
      },
    },
    computed: {
      buttonClass() {
        return this.buttonHovered ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-800';
      },
    },
  };
  </script>
  
  <style>
  /* Estilos personalizados */
  </style>
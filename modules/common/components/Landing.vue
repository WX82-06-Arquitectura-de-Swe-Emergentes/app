<template>
  <div>
    <!-- Sección de Bienvenida -->
    <section class="welcome-section">
      <div class="text-center text-white">
        <h1 class="text-6xl font-bold mb-4 bg-black bg-opacity-50 text-white p-4">¡Bienvenido a AdventureHub!</h1>
        <p class="text-lg mb-8 bg-black bg-opacity-50 text-white p-4">Conecta con agencias de turismo y descubre
          increíbles itinerarios.</p>
        <router-link to="/register" class="bg-red-600 hover:bg-red-700 py-3 px-6 rounded-full text-2xl">REGISTRATE YA
        </router-link>
      </div>
    </section>


    <section class="py-12 bg-gray-900 text-white">
      <div class="container mx-auto">
        <h2 class="text-3xl text-center font-semibold text-gray-100 mb-4">Descubre Destinos Personalizados con Nuestro
          Bot
          de IA</h2>

        <p class="text-lg text-center text-gray-400 mb-4">
          Nuestro bot de inteligencia artificial está aquí para ayudarte a planificar tu próximo viaje de manera
          personalizada. Puedes obtener recomendaciones de destinos, itinerarios y mucho más, todo adaptado a tus preferencias
          y
          gustos.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Ejemplo 1 - Detalle de Viaje -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Explora los increíbles Misterios de la Selva Amazónica</h3>
            <p class="mb-2">Embárcate en una aventura en la selva amazónica peruana, con observación de la vida
              silvestre,
              paseos en canoa y exploración de la flora y fauna exótica.</p>
            <ul class="mb-4">
              <li>Fecha de inicio: 10 de diciembre</li>
              <li>Duración: 5 días</li>
            </ul>
            <a href="/" class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full text-lg">Saber mas</a>
          </div>

          <!-- Ejemplo 2 - Detalle de Viaje -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Descubre la Magia de los Andes Peruanos</h3>
            <p class="mb-2">Un viaje a través de los majestuosos Andes peruanos, con caminatas en las montañas, visitas
              a
              pueblos locales y la oportunidad de ver las maravillas naturales de la región.</p>
            <ul class="mb-4">
              <li>Fecha de inicio: 15 de enero</li>
              <li>Duración: 7 días</li>
            </ul>
            <a href="/" class="bg-blue-500 hover-bg-blue-600 py-2 px-4 rounded-full text-lg">Saber mas</a>
          </div>

          <!-- Ejemplo 3 - Detalle de Viaje -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Explora las Maravillas Costeras del Perú</h3>
            <p class="mb-2">Un viaje a lo largo de la costa peruana, con visitas a playas hermosas, sitios arqueológicos
              y
              deliciosa comida local. Vive la experiencia de la costa peruana.</p>
            <ul class="mb-4">
              <li>Fecha de inicio: 5 de febrero</li>
              <li>Duración: 4 días</li>
            </ul>
            <a href="/" class="bg-blue-500 hover-bg-blue-600 py-2 px-4 rounded-full text-lg">Saber mas</a>
          </div>
        </div>

      </div>
    </section>

    <!-- Sección de Chats Online -->
    <section class="pt-5 bg-gray-900 pb-8">
      <div class="container mx-auto">
        <h2 class="text-3xl text-center font-semibold text-gray-100 mb-4">Chats en Línea con las Agencias de
          Turismo</h2>
        <p class="text-lg text-center text-gray-400 mb-8">
          Conéctate de manera instantánea con las agencias de turismo y descubre experiencias únicas en tiempo real.
          Nuestros chats en línea te permiten interactuar directamente con expertos en viajes, hacer preguntas y recibir
          recomendaciones personalizadas.
        </p>

        <!-- Ejemplos de Chats en Línea -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <!-- Ejemplo 1 - Chat en Línea -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2 text-gray-100">Chat de Asesoría de Aventuras en la Selva</h3>
            <p class="mb-2 text-gray-400">Habla con nuestros expertos en aventuras en la selva amazónica peruana. Obtén
              consejos y guías sobre rutas de senderismo, vida silvestre y más.</p>
            <a href="/chat-aventuras" class="bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg">Iniciar
              Chat</a>
          </div>


          <!-- Ejemplo 3 - Chat en Línea -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2 text-gray-100">Chat de Recorrido por la Costa</h3>
            <p class="mb-2 text-gray-400">Habla con nuestros expertos en recorridos costeros en Perú. Descubre playas
              impresionantes y actividades acuáticas emocionantes.</p>
            <a href="/chat-costa" class="bg-red-500 hover-bg-blue-600 text-white py-2 px-4 rounded-full text-lg">Iniciar
              Chat</a>
          </div>
        </div>
      </div>
    </section>


    <!-- Sección de Pagos -->
    <section class="pb-6 bg-gray-100">
      <div class="container mx-auto">
        <p class="text-lg text-center text-gray-700 mb-8">Aceptamos Visa, American Express, Mastercard y otras formas de
          pago seguras.</p>
        <div class="flex justify-center space-x-4">
          <img src="~/assets/images/visa-logo.png" alt="Visa" class="h-8">
          <img src="~/assets/images/amex-logo.png" alt="American Express" class="h-8">
          <img src="~/assets/images/mastercard-logo.png" alt="Mastercard" class="h-8">
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.welcome-section {
  background-image: url('~/assets/images/macchu-pichu.png');
  /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 30vh;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

}

.welcome-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: -1;
}</style>

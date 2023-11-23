<template>
  <Nav v-if="session"/>
  <PublicNav v-else/>
  <main class="h-[calc(100vh-4rem)] bg-background">
    <slot></slot>
  </main>
</template>

<script setup>
import Nav from "~/modules/common/components/Nav.vue";
import PublicNav from "~/modules/common/components/PublicNav.vue";
import {navigateTo} from "#app";

const {session} = useAuth()
const route = useRoute()

const navigation = [
  {name: 'Dashboard', href: '/', current: true},
  {name: 'Viajes', href: '/trips', current: false},
  {name: 'Projects', href: '#', current: false},
  {name: 'Calendar', href: '#', current: false},
]

const publicRoutes = [
  '/', '/login', '/register', '/trips', '/trips/search', '/my-travel-packages'
]

if (!session.value && !publicRoutes.includes(route.path))
  navigateTo('/login')

if (session.value && (route.path === '/login' || route.path === '/register')) {
  navigateTo('/')
}


</script>
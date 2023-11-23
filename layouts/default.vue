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

const { session, signOut } = useAuth()

const navigation = [
  {name: 'Dashboard', href: '/', current: true},
  {name: 'Viajes', href: '/trips', current: false},
  {name: 'Projects', href: '#', current: false},
  {name: 'Calendar', href: '#', current: false},
]
</script>
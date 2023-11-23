<template>
  <Dashboard v-if="session"/>
  <Landing v-else/>
</template>

<script setup lang="ts">
import Dashboard from "~/modules/common/components/Dashboard.vue";
import Landing from "~/modules/common/components/Landing.vue";

const {session} = useAuth()
</script>
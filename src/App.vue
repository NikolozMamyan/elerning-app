<template>
  <div id="app">
    <Sidebar v-if="isAuthenticated()" />
    <div class="main-content">
      <Topbar v-if="isAuthenticated()" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"
import Topbar from "@/components/Topbar.vue"
import { useAuthStore } from "@/store/authStore.js"

const { isAuthenticated } = useAuthStore()
</script>

<style>
#app {
  display: flex;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

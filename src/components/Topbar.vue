<script setup>
import { useAuthStore } from "@/store/authStore.js"

const { user } = useAuthStore()
</script>

<template>
  <header class="topbar">
    <h1 v-if="user">Welcome, {{ user.fullName }}</h1>
    <h1 v-else>Welcome, Guest</h1>

    <div class="hstack">
      <div class="avatar">
        <div class="vstack" style="gap:2px; align-items:flex-end">
          <strong class="small">{{ user?.role || '' }}</strong>
          <span class="small" style="color:var(--muted)">HR at WorkFlowX</span>
        </div>
        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=facearea&facepad=2" alt="user" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/store/authStore.js"

const { user, logout } = useAuthStore()
const router = useRouter()
const open = ref(false)

const closeOnEsc = (e) => { if (e.key === "Escape") open.value = false }
onMounted(() => window.addEventListener("keydown", closeOnEsc))
onBeforeUnmount(() => window.removeEventListener("keydown", closeOnEsc))

const tools = [
  { label:'Log Out', icon:'M6 6h6m0-2h4v16h-4m0-2H6', action: async () => {
      try {
        await fetch("http://localhost:8000/api/logout", { method:"POST", credentials:"include" })
      } catch (e) {
        console.error("Logout error", e)
      } finally {
        logout()
        router.push("/login")
      }
    } 
  }
]
</script>

<template>
  <aside class="sidebar" :class="{ open }" @click.self="open=false">
    <div class="panel card">
      <div class="brand hstack">
        <div class="logo">LC</div>
        <div>
          <div class="name">{{ user?.name || "Utilisateur" }}</div>
          <div class="small">{{ user?.email || "Bienvenue" }}</div>
        </div>
      </div>

      <!-- tes nav restent identiques -->

      <div class="separator"></div>

      <nav class="nav vstack">
        <a v-for="t in tools" :key="t.label" href="#" class="navlink muted" @click.prevent="t.action()">
          <span class="icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path :d="t.icon" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span>{{ t.label }}</span>
        </a>
      </nav>
    </div>
  </aside>
</template>



<style scoped>
/* layout + overlay */
.sidebar{
  position:relative;
}
.sidebar .panel{
  position:sticky; top:14px; margin:14px; padding:14px;
}

@media (max-width:1024px){
  #sidebar-trigger{ display:block; }
  .sidebar{
    position:fixed; inset:0; z-index:40; display:none;
    background:rgba(0,0,0,.25);
  }
  .sidebar.open{ display:block; }
  .sidebar .panel{
    position:absolute; top:0; bottom:0; left:0; width:80%;
    max-width:320px; overflow:auto; margin:0; border-radius:0 16px 16px 0;
  }
}

/* inner */
.brand{ padding:6px 8px 14px 8px; }
.logo{
  width:44px; height:44px; border-radius:999px;
  background:var(--brand); color:white; display:flex; align-items:center; justify-content:center;
  font-weight:800;
}
.name{ font-weight:800; letter-spacing:.4px; }

.nav{ gap:8px; }
.navlink{
  display:flex; align-items:center; gap:12px;
  padding:12px 10px; border-radius:12px;
  color:var(--text);
}
.navlink:hover{ background:var(--brand-50); }
.navlink.muted{ color:var(--muted); }
.icon{ width:22px; display:grid; place-items:center; color:#2b7c77; }
</style>

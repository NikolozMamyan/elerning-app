import { createRouter, createWebHistory } from "vue-router"
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Dashboard from "@/views/Dashboard.vue"
import { useAuthStore } from "@/store/authStore.js"

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { 
    path: "/dashboard", 
    component: Dashboard,
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔒 Protection des routes
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()

  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login")
  } else if ((to.path === "/login" || to.path === "/register") && isAuthenticated()) {
    next("/dashboard")
  } else {
    next()
  }
})

export default router

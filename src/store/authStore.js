// src/store/authStore.js
import { ref } from "vue"

const user = ref(null)

export function useAuthStore() {
  if (!user.value && localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"))
  }

  const login = (userData) => {
    user.value = userData
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem("user")
  }

  const isAuthenticated = () => !!user.value

  const getUser = () => user

  return { user, login, logout, isAuthenticated, getUser }
}

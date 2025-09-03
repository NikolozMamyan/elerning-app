<template>
  <div class="login-container">
    <!-- Partie gauche illustration -->
    <div class="illustration">
      <img src="/images/illustration.svg" alt="Illustration" />
      <h2>Master multiple courses with certification...</h2>
      <p>
        Stay up-to-date with compliance, finance, project management, and personal development modules.
      </p>
    </div>

    <!-- Partie droite formulaire -->
    <div class="form-container">
      <h2>Sign In</h2>
      <p>Welcome back, You've been missed!</p>

      <button class="btn google">Sign in with Google</button>
      <button class="btn apple">Sign in with Apple</button>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input type="email" v-model="email" placeholder="Email" required />
        </div>

        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password" required />
        </div>

        <div class="options">
          <label>
            <input type="checkbox" v-model="remember" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" class="btn sign-in">Sign In</button>
      </form>

      <p class="signup">
        Don’t have an account yet?
        <a href="#">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const loading = ref(false)
const error = ref(null)
const user = ref(null)

const handleLogin = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // IMPORTANT : pour envoyer/recevoir les cookies AUTH_TOKEN
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || "Erreur de connexion")
    }

    user.value = data.user
    console.log("✅ Connecté :", data.user)

    // Ici tu peux rediriger vers ton dashboard
    // e.g. router.push("/dashboard")

  } catch (err) {
    error.value = err.message
    console.error("❌ Erreur login:", err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
  font-family: sans-serif;
}

.illustration {
  flex: 1;
  padding: 2rem;
  text-align: center;
}

.illustration img {
  max-width: 100%;
}

.form-container {
  flex: 1;
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fafafa;
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1.5rem;
  color: #555;
}

.form-group {
  margin-bottom: 1rem;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.btn.google {
  background: #f5f5f5;
}

.btn.apple {
  background: #333;
  color: white;
}

.btn.sign-in {
  background: #006644;
  color: white;
}

.signup {
  margin-top: 1rem;
  text-align: center;
}
</style>

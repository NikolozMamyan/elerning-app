<template>
  <div class="login-container">
    <!-- Partie gauche illustration -->
    <div class="illustration">
      <div class="illustration-content">
        <!-- Illustration vectorielle -->

        <img src="/images/illustration.svg" alt="">
        <h2>Master multiple courses with certification...</h2>
        <p>
          Stay up-to-date with compliance, finance, project management, and personal development modules.
        </p>
      </div>
    </div>

    <!-- Partie droite formulaire -->
    <div class="form-container">
      <div class="form-content">
        <h2>Sign In</h2>
        <p class="welcome">Welcome back, You've been missed!</p>

        <div class="social-buttons">
          <button class="btn btn-google">
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
          
          <button class="btn btn-apple">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Sign in with Apple
          </button>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <input 
                type="email" 
                v-model="email" 
                placeholder="email" 
                required 
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z"/>
              </svg>
              <input 
                type="password" 
                v-model="password" 
                placeholder="Enter password" 
                required 
              />
              <button type="button" class="toggle-password">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="remember" />
              <span class="checkmark"></span>
              Remember me
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn-signin" :disabled="loading">
            {{ loading ? 'Signing In...' : 'Sign In' }}
          </button>
        </form>

        <p class="signup">
          Don't have an account yet?
          <a href="/register" class="signup-link">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const remember = ref(false)
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
      credentials: "include",
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

    // Redirection vers le dashboard
    // router.push("/dashboard")

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
  min-height: 100vh;
  background: #f8fafc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* PARTIE ILLUSTRATION */
.illustration {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.illustration-content {
  text-align: center;
  max-width: 500px;
}

.illustration-graphic {
  position: relative;
  margin-bottom: 3rem;
  height: 400px;
}

/* Laptop */
.laptop {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.screen {
  width: 240px;
  height: 150px;
  background: #1e293b;
  border-radius: 8px 8px 0 0;
  border: 3px solid #334155;
  padding: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.laptop-base {
  width: 260px;
  height: 8px;
  background: linear-gradient(135deg, #64748b, #475569);
  border-radius: 0 0 12px 12px;
  margin-top: -2px;
}

.dashboard {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 4px;
  padding: 8px;
}

.header-bar {
  height: 12px;
  background: #14b8a6;
  border-radius: 2px;
  margin-bottom: 8px;
}

.charts {
  display: flex;
  gap: 6px;
  height: calc(100% - 20px);
}

.chart-item {
  width: 30px;
  height: 40px;
  border-radius: 4px;
}

.chart-item.green {
  background: #10b981;
}

.chart-item.blue {
  background: #3b82f6;
}

.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  flex: 1;
}

.bar {
  width: 8px;
  background: #14b8a6;
  border-radius: 1px;
}

/* Personnages */
.characters {
  position: absolute;
  width: 100%;
  height: 100%;
}

.character {
  position: absolute;
}

.head {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-bottom: 4px;
}

.body {
  width: 32px;
  height: 45px;
  border-radius: 16px;
  position: relative;
}

.presenter {
  left: 10px;
  top: 80px;
}

.presenter .head {
  background: #fbbf24;
}

.presenter .body {
  background: #374151;
}

.student-1 {
  right: 60px;
  top: 40px;
}

.student-1 .head {
  background: #8b5cf6;
}

.student-1 .body {
  background: #ffffff;
  border: 2px solid #e5e7eb;
}

.student-2 {
  right: 20px;
  top: 140px;
}

.student-2 .head {
  background: #ec4899;
}

.student-2 .body {
  background: #6b7280;
}

.student-3 {
  right: 100px;
  top: 160px;
}

.student-3 .head {
  background: #f59e0b;
}

.student-3 .body {
  background: #14b8a6;
}

.question-mark {
  position: absolute;
  top: -25px;
  right: -15px;
  background: #14b8a6;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.chat-bubble {
  position: absolute;
  left: 50px;
  top: 50px;
  background: white;
  border-radius: 16px;
  padding: 8px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dots {
  display: flex;
  gap: 4px;
}

.dots span {
  width: 6px;
  height: 6px;
  background: #14b8a6;
  border-radius: 50%;
}

.pencil {
  position: absolute;
  left: 20px;
  bottom: 20px;
  transform: rotate(-45deg);
}

.pencil-body {
  width: 60px;
  height: 8px;
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  border-radius: 4px;
}

.pencil-tip {
  width: 0;
  height: 0;
  border-left: 8px solid #374151;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  margin-left: 60px;
  margin-top: -8px;
}

.illustration h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.illustration p {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
}

/* PARTIE FORMULAIRE */
.form-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: white;
  max-width: 480px;
}

.form-content {
  width: 100%;
  max-width: 400px;
}

.form-content h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.welcome {
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.social-buttons {
  margin-bottom: 1.5rem;
}

.btn {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-google {
  background: white;
  color: #374151;
  border-color: #d1d5db;
}

.btn-apple {
  background: #000;
  color: white;
  border-color: #000;
}

.btn-signin {
  background: #065f46;
  color: white;
  border: none;
  margin-top: 1rem;
}

.btn-signin:hover {
  background: #047857;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.icon {
  width: 18px;
  height: 18px;
}

.form-group {
  margin-bottom: 1rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #9ca3af;
  z-index: 1;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.875rem;
  background: #f9fafb;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #065f46;
  background: white;
  box-shadow: 0 0 0 3px rgba(6, 95, 70, 0.1);
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.toggle-password svg {
  width: 18px;
  height: 18px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: white;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox-label input:checked + .checkmark {
  background: #065f46;
  border-color: #065f46;
}

.checkbox-label input:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-link {
  color: #065f46;
  font-size: 0.875rem;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.signup {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 2rem;
}

.signup-link {
  color: #065f46;
  text-decoration: none;
  font-weight: 500;
}

.signup-link:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 1024px) {
  .login-container {
    flex-direction: column;
  }
  
  .illustration {
    min-height: 50vh;
  }
  
  .illustration-graphic {
    height: 300px;
  }
  
  .form-container {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .illustration {
    padding: 2rem 1rem;
    min-height: 40vh;
  }
  
  .illustration h2 {
    font-size: 1.5rem;
  }
  
  .form-container {
    padding: 1.5rem 1rem;
  }
  
  .illustration-graphic {
    height: 250px;
  }
  
  .screen {
    width: 200px;
    height: 120px;
  }
  
  .laptop-base {
    width: 220px;
  }
}
</style>
<template>
  <div class="page-container">
    <!-- Section gauche - vide pour ton image -->
    <div class="left-section">
      <img src="/images/register.svg" alt="">
  <div class="content-text">
        <h2>Master multiple courses with certification...</h2>
        <span class="subtitle-text">Stay up-to-date with compliance, finance, project management, and personal development modules.</span>
      </div>
    </div>

    <!-- Section droite avec formulaire -->
    <div class="right-section">
      <div class="register-container">
        <h1>Sign Up</h1>
        <p class="subtitle">Welcome, Sign up and start your Journey</p>

        <!-- Boutons de connexion sociale -->
        <div class="social-buttons">
          <button class="social-btn google-btn">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
              <path fill="#34A853" d="M8.98 16c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.53H1.83v2.07A8 8 0 0 0 8.98 16z"/>
              <path fill="#FBBC05" d="M4.5 9.49a4.77 4.77 0 0 1 0-3.02V4.44H1.83a8 8 0 0 0 0 7.12l2.67-2.07z"/>
              <path fill="#EA4335" d="M8.98 4.75c1.23 0 2.33.42 3.2 1.24l2.4-2.4A8 8 0 0 0 1.83 4.44L4.5 6.5a4.8 4.8 0 0 1 4.48-1.75z"/>
            </svg>
            sign in with Google
          </button>
          <button class="social-btn apple-btn">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
              <path d="M8.02 0C7.96.01 7.9.02 7.84.04c-1.15.25-2.06 1.33-2.25 2.53-.18 1.16.69 2.31 1.57 2.46.05.01.11.01.16.01.07 0 .13-.01.2-.02 1.15-.25 1.95-1.36 2.07-2.46C9.77 1.4 8.94.18 8.02 0zm7.48 14.61c-.26.59-.57 1.13-.92 1.64-.48.7-1.26 1.57-2.17 1.57-.37 0-.82-.11-1.29-.31-.5-.21-1.01-.31-1.42-.31-.44 0-.97.11-1.5.32-.46.19-.88.29-1.2.29-.98 0-1.84-.97-2.35-1.73-.93-1.38-1.65-3.56-1.65-5.68 0-2.28.93-4.17 2.42-4.93.45-.23.96-.35 1.49-.35.56 0 1.15.16 1.64.31.35.11.67.21.93.21.23 0 .52-.09.85-.19.55-.17 1.23-.38 1.86-.38 1.31 0 2.42.68 3.07 1.74-2.71 1.49-2.28 5.37.24 6.8z"/>
            </svg>
            sign in with Apple
          </button>
        </div>

        <!-- Sélection du type de compte -->
<div class="account-type">
  <h3>Select Account Type</h3>
  <div class="radio-group">
    <label class="radio-label">
      <input
        type="radio"
        name="accountType"
        value="employee"
        v-model="role"
      >
      <span class="radio-custom"></span>
      Employee
    </label>

    <label class="radio-label">
      <input
        type="radio"
        name="accountType"
        value="company"
        v-model="role"
      >
      <span class="radio-custom"></span>
      Company
    </label>
  </div>
</div>


        <form @submit.prevent="register" class="register-form">
          <div class="form-group">
            <label>Name</label>
            <div class="input-container">
              <svg class="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              <input
                type="text"
                v-model="fullName"
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label>Professional email</label>
            <div class="input-container">
              <svg class="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
              </svg>
              <input
                type="email"
                v-model="email"
                placeholder="Professional email"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <div class="input-container">
              <svg class="input-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              </svg>
              <input
                type="password"
                v-model="password"
                placeholder="Enter password"
                required
              />
              <button type="button" class="password-toggle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" checked>
              <span class="checkbox-custom">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M9 1L3.5 6.5L1 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              Remember me
            </label>
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? "Creating Account..." : "Sign Up" }}
          </button>
        </form>

        <div class="login-link">
          <span>Already have an account?</span>
          <a href="/login" class="link">Sign In</a>
        </div>

        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">{{ success }}</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-links">
      <a href="#">Terms & Condition</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Help</a>
      <a href="#">English</a>
    </div>
    <p class="copyright">© 2025, All Rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const role = ref("");
const fullName = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);
const success = ref(null);

const register = async () => {
  error.value = null;
  success.value = null;
  loading.value = true;

  try {
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        role: role.value,
        fullName: fullName.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      error.value = data.error || "Erreur d'inscription";
    } else {
      success.value = data.message;
    }
  } catch (err) {
    error.value = "Impossible de contacter le serveur.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  min-height: 100vh;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Section gauche - vide pour ton image */
.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* Tu peux ajouter ton image ici avec background-image ou <img> */
}
.content-text {
  max-width: 450px;
  text-align: center;
}

.content-text h2 {
  font-size: 2rem;
  font-weight: 600;

  margin-bottom: 1.5rem;
  line-height: 1.3; 
}

.subtitle-text {
  font-size: 1.1rem;
 
  line-height: 1.6;
  opacity: 0.9;
}

/* Section droite */
.right-section {
  flex: 1;
  background: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.register-container {
  width: 100%;
  max-width: 400px;
}

.register-container h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #718096;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  color: #4a5568;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.social-btn:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.account-type {
  margin-bottom: 2rem;
}

.account-type h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.radio-group {
  display: flex;
  gap: 2rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #4a5568;
}

.radio-label input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
}

.radio-label input[type="radio"]:checked + .radio-custom {
  border-color: #38a169;
  background: #38a169;
}

.radio-label input[type="radio"]:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #2d3748;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: #a0aec0;
  z-index: 2;
}

.input-container input {
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  background: #f7fafc;
  transition: all 0.2s;
}

.input-container input:focus {
  outline: none;
  border-color: #38a169;
  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1);
  background: white;
}

.input-container input::placeholder {
  color: #a0aec0;
}

.password-toggle {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 4px;
  z-index: 2;
}

.password-toggle:hover {
  color: #718096;
}

.checkbox-group {
  margin: 0.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #4a5568;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
  background: #38a169;
  border-color: #38a169;
}

.submit-btn {
  padding: 14px 20px;
  background: #38a169;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  background: #2f855a;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #718096;
}

.login-link .link {
  color: #38a169;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
}

.login-link .link:hover {
  text-decoration: underline;
}

.error {
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 8px 12px;
  background: #fed7d7;
  border: 1px solid #feb2b2;
  border-radius: 4px;
}

.success {
  color: #38a169;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 8px 12px;
  background: #c6f6d5;
  border: 1px solid #9ae6b4;
  border-radius: 4px;
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  z-index: 10;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #718096;
  text-decoration: none;
  font-size: 0.85rem;
}

.footer-links a:hover {
  color: #4a5568;
}

.copyright {
  text-align: center;
  color: #a0aec0;
  font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 768px) {
  .page-container {
    flex-direction: column;
  }
  
  .left-section {
    min-height: 40vh;
  }
  
  .right-section {
    min-height: 60vh;
    padding: 1rem;
  }
  
  .footer {
    position: relative;
  }
  
  .footer-links {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
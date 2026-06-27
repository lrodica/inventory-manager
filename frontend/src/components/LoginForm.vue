<template>
  <div class="login-container">
    <form class="login-card" @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Email" />
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Password" />

      <button type="submit" :disabled="loading">
        {{ loading ? 'Loading...' : 'Login' }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/services/auth.service'

const router = useRouter()

const email = ref('')
const password = ref('')

const loading = ref(false)

const error = ref<string | null>(null)

const validate = () => {
  if (!email.value || !password.value) {
    error.value = 'Email and password are required'
    return false
  }

  if (!email.value.includes('@')) {
    error.value = 'Invalid email format'
    return false
  }

  return true
}

const handleSubmit = async () => {
  loading.value = true

  if (!validate()) {
    loading.value = false
    return
  }
  const user = await login(email.value, password.value)

  if (!user) {
    error.value = 'Invalid credentials'
    loading.value = false
    return
  }

  router.push({ name: 'Dashboard' })
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-bg);
}

.login-card {
  width: 320px;
  padding: var(--space-6);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-md);
}

h2 {
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

input {
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

button {
  padding: var(--space-3);
  border: none;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background: var(--color-primary-hover);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: var(--color-error);
  font-size: 14px;
}
</style>
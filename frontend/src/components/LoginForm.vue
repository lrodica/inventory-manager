<template>
  <div class="login-container">
    <form class="login-card">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<style scoped>
.login-container {
  height: 100vh;
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
  transition: 0.2s;
}

button:hover {
  background: var(--color-primary-hover);
}
</style>
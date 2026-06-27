<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>
<script setup lang="ts">
import { clearSession } from '@/services/session.service'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  clearSession()
  router.push('/login')
}
</script>
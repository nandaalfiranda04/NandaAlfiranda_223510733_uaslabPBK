<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Footer from './components/footer.vue'; // Ensure the correct path

const drawer = ref(false);

function navigateTo(route) {
  // Handle navigation if needed
}
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="height: 100vh;" full-width class="shadow-2 rounded-borders">
      <!-- Header -->
      <RouterView />
      <Footer />
    </q-layout>
  </div>
</template>

<style scoped>
.q-pa-md {
  padding: 16px;
}

.q-toolbar {
  display: flex;
  align-items: center;
}

.q-toolbar-title {
  cursor: pointer;
}

.q-chip {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.navbar-brand {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar-brand:hover {
  color: #dfe3ee;
}

.active-link {
  text-decoration: underline;
}
</style>

<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders" style="height: 100vh; overflow: hidden;">
      <!-- Header -->
      <q-header elevated>
        <q-toolbar class="glossy">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" style="color: white;" />
          <q-avatar>
            <img src="https://static.vecteezy.com/system/resources/previews/009/663/747/original/warning-icon-transparent-free-png.png" style="width: 40px; height: 40px;">
          </q-avatar>
          <q-toolbar-title @click="navigateTo('/')">
            <span style="color: white; font-weight: bold;">UAS LAB PBK</span>
          </q-toolbar-title>
          <q-chip style="background-color: #fff; color: #3b5998;">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-item clickable v-ripple @click="handleLinkClick(['https://www.instagram.com/nanda_alfiranda/?hl=en'])">
          <q-item-section>Nanda Alfiranda</q-item-section></q-item>
          </q-chip>
        </q-toolbar>
      </q-header>
  
      <!-- Drawer -->
      <q-drawer v-model="drawer" show-if-above bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <div class="text-weight-bold" style="height: 40px; padding-top: 20px;">TUGAS NANDA</div>
        <q-list>
          <q-item clickable v-ripple @click="handleLinkClick('https://nanda-project-cv.netlify.app/')">
            <q-item-section>TUGAS 1</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nandaalfiranda-223510733-4a.netlify.app/')">
            <q-item-section>TUGAS 2</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nandaalfiranda-223510733.netlify.app/')">
            <q-item-section>TUGAS 3</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nandaalfiranda-223510733-tgs4.netlify.app/')">
            <q-item-section>TUGAS 4</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nandaalfiranda-223510733-tgs5.netlify.app/')">
            <q-item-section>TUGAS 5</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nanda-223510733-tugas6.netlify.app/')">
            <q-item-section>TUGAS 6</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleLinkClick('https://nanda-223510733-tgs7.netlify.app/')">
            <q-item-section>TUGAS 7</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <!-- Page Container -->
      <q-page-container style="overflow: hidden;">
        <q-page class="q-pa-md" style="overflow: hidden;">
          <div class="weather-widget">
            <q-card>
              <q-card-section>
                <div class="text-h6">Ramal Cuaca</div>
                <div>
                  <q-input v-model="city" label="Masukkan wilayah" dense outlined />
                  <q-btn @click="fetchWeather" color="primary" label="Cek" class="q-mt-md" />
                </div>
                <div v-if="weather" class="weather-info">
                  <div>{{ weather.name }}, {{ weather.sys.country }}</div>
                  <div>{{ weather.weather[0].description }}</div>
                  <div>{{ weather.main.temp }}°C temperature from {{ weather.main.temp_min }} to {{ weather.main.temp_max }} °C, wind {{ weather.wind.speed }} m/s. clouds {{ weather.clouds.all }}%, {{ weather.main.pressure }} hpa</div>
                  <div>Geo coords [{{ weather.coord.lat }}, {{ weather.coord.lon }}]</div>
                </div>
                <div v-else-if="loading">
                  Loading...
                </div>
                <div v-else-if="error">
                  {{ error }}
                </div>
                <div v-else>
                  Silakan masukkan nama kota.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup>
  import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const city = ref('');
  const weather = ref(null);
  const loading = ref(false);
  const error = ref('');
  const drawer = ref(false);
  
  const apiKey = '31f105f1e51a5df845ce80fc9288418b'; // Replace with your API key
  
  async function fetchWeather() {
    if (!city.value) {
      error.value = 'Silakan masukkan nama kota.';
      return;
    }
  
    loading.value = true;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`);
      if (response.data.cod === '404') {
        error.value = 'Kota tidak ditemukan. Harap masukkan nama kota yang valid.';
        weather.value = null;
      } else {
        weather.value = response.data;
        error.value = '';
      }
    } catch (err) {
      console.error("Terjadi kesalahan saat mengambil data cuaca: ", err);
      if (err.response) {
        error.value = `Tidak ada ramalan cuaca pada wilayah ${city.value}`;
      } else if (err.request) {
        error.value = 'Gagal terhubung ke server. Harap periksa koneksi internet Anda.';
      } else {
        error.value = 'Lagi bermasalah. Coba lagi nanti.';
      }
    } finally {
      loading.value = false;
      city.value = ''; // Mengosongkan input setelah permintaan selesai
    }
  }
  
  // Fungsi navigasi ke halaman lain atau membuka link di tab baru
  function handleLinkClick(url, isExternal = true) {
    if (isExternal) {
      window.open(url, '_blank');
    } else {
      router.push(url);
    }
  }
  
  // Fungsi navigasi ke halaman utama
  function navigateTo(route) {
    router.push(route);
  }
  </script>
  
  <style scoped>
  .weather-widget {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 20px;
  }
  
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
  
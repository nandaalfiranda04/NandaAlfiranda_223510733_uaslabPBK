import '@quasar/extras/material-icons/material-icons.css';
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass';
import { createApp } from 'vue'; // Import createApp dari Vue
import router from './router';

// Asumsikan komponen root Anda adalah App.vue
// dan diletakkan di folder yang sama dengan main.js
import App from './App.vue';

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins dan tambahkan di sini
});

app.use(router); // Tambahkan router ke aplikasi

// Asumsikan Anda memiliki <div id="app"></div> di index.html Anda
app.mount('#app');

<template>
  <q-footer class="footer-class" elevated>
    <q-toolbar class="glossy">
      <q-toolbar-title>
        <q-item clickable v-ripple @click="openMultipleLinks(['https://www.instagram.com/nanda_alfiranda/?hl=en'])">
          <q-item-section>Nanda Alfiranda</q-item-section>
        </q-item>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
function openMultipleLinks(links) {
  links.forEach(link => {
    window.open(link, '_blank');
  });
}
</script>

<style scoped>
.footer-class {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>

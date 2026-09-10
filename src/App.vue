<script setup>
import AppHead from './components/AppHead.vue'
import Main from './components/Main.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <v-app>
    <AppHead />

    <v-main>
      <Main />
    </v-main>

    <AppFooter />
  </v-app>
</template>
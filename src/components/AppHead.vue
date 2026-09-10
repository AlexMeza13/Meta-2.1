<script setup>
import logoUrl from '../assets/Avatar.jpg'
</script>

<template>
  <v-app-bar color="primary" elevation="2">
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-avatar size="40">
        <v-img
          :src="logoUrl"
          alt="Logo"
          cover
        ></v-img>
      </v-avatar>

      <v-app-bar-title class="ml-3" style="flex: none;">
        AlexsFolio Fotografico
      </v-app-bar-title>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
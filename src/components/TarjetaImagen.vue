<script setup>
defineProps({
  imagenUrl: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      :src="imagenUrl"
      height="200"
      cover
    ></v-img>

    <v-card-title>{{ titulo }}</v-card-title>
    <v-card-subtitle>Foto por: {{ autor }}</v-card-subtitle>
    <v-card-text>{{ descripcion }}</v-card-text>
  </v-card>
</template>
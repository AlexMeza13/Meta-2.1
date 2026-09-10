<script setup>
const fechaActual = new Date().toLocaleDateString('es-MX', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>

<template>
  <v-footer color="primary" class="text-center d-flex flex-column">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          Mayorga Meza Jesus Alexis
        </v-col>
        <v-col cols="12" md="4">
          <strong>Matrícula:</strong> 1178639
        </v-col>
        <v-col cols="12" md="4">
             {{ fechaActual }}
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-2"></v-divider>

    <div class="pb-2">
      {{ new Date().getFullYear() }} — Creado con intenciones educativas :DD
    </div>
  </v-footer>
</template>
<script setup>
import { ref } from 'vue'
import TarjetaImagen from './TarjetaImagen.vue'
import TablaDeDatos from './TablaDeDatos.vue'


const imagenUrl1 = ref('https://picsum.photos/id/1015/300/200')
const autor1 = ref('Alejandro Escamilla')
const imagenUrl2 = ref('https://picsum.photos/id/1025/300/200')
const autor2 = ref('Kabu')
const cargando = ref(false)
const errorMensage = ref('')

async function actualizarImagenes() {
  cargando.value = true
  errorMensage.value = ''

  try {
    const respuesta = await fetch('https://picsum.photos/v2/list?page=1&limit=50')

    if (!respuesta.ok) {
      throw new Error('La API dio error')
    }

    const listaImagenes = await respuesta.json()
    const indice1 = Math.floor(Math.random() * listaImagenes.length)
    let indice2 = Math.floor(Math.random() * listaImagenes.length)

    // Los indices son diferentes
    while (indice2 === indice1) {
      indice2 = Math.floor(Math.random() * listaImagenes.length)
    }

    const img1 = listaImagenes[indice1]
    const img2 = listaImagenes[indice2]

    imagenUrl1.value = `https://picsum.photos/id/${img1.id}/300/200`
    autor1.value = img1.author

    imagenUrl2.value = `https://picsum.photos/id/${img2.id}/300/200`
    autor2.value = img2.author

  } catch (error) {
    errorMensage.value = 'No se pudieron cargar las imagenes :c, Espera a que regrese la conexion :D'
    console.error(error)
  } finally {
    cargando.value = false
  }
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <TarjetaImagen
          :imagen-url="imagenUrl1"
          titulo="Foto Aleatoria 1"
          descripcion="Aqui se aprecia una foto aleatoria"
          :autor="autor1"
        />
      </v-col>
      <v-col cols="12" md="5">
        <TarjetaImagen
          :imagen-url="imagenUrl2"
          titulo="Foto Aleatoria 2"
          descripcion="Aqui se aprecia otra foto aleatoria"
          :autor="autor2"
        />
      </v-col>
    </v-row>

    <v-row justify="center" class="my-4">
      <v-btn
        color="secondary"
        :loading="cargando"
        :disabled="cargando"
        @click="actualizarImagenes"
      >
        Actualizar Las Fotos
      </v-btn>
    </v-row>

    <v-row v-if="errorMsg" justify="center">
      <v-col cols="12" md="8">
        <v-alert type="error" closable>
          {{ errorMsg }}
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <TablaDeDatos />
      </v-col>
    </v-row>
  </v-container>
</template>
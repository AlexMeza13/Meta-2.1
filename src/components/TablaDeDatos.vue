<script setup>
const habilidades = [
  { habilidad_tecnica: 'Java', nivel: 'Intermedio', experiencia: '2 años y 6 meses' },
  { habilidad_tecnica: 'Python', nivel: 'Basico', experiencia: '1 año' },
  { habilidad_tecnica: 'SQL', nivel: 'Basico', experiencia: '1 año y 6 meses' },
  { habilidad_tecnica: 'AndroidStudio', nivel: 'Intermedio', experiencia: '2 años' },
]
</script>

<template>
  <v-container>
    <h2 class="text-h6 mb-3">Habilidades Tecnicas</h2>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Habilidad Tecnica</th>
          <th class="text-left">Nivel de Dominio</th>
          <th class="text-left">Años de Experiencia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in habilidades" :key="item.habilidad_tecnica">
          <td>{{ item.habilidad_tecnica }}</td>
          <td>{{ item.nivel }}</td>
          <td>{{ item.experiencia }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
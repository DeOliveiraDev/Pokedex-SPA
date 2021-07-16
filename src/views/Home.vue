<template>
  <!-- CARD -->
  <v-card class="mx-auto rounded-xl mt-1" max-width="350">
    <v-img
      max-height="250px"
      src="https://static.pokemonpets.com/images/monsters-images-300-300/6-Charizard.webp">
    </v-img>
    <div class="red darken-2 rounded-t-xl">
      <v-card-title><strong>Charizard</strong></v-card-title>
    </div>
      <!-- Botão de Interação -->
      <router-link to="/PokeCharizard">
      <v-card-actions>
        <v-btn color="red darken-2" text> Veja Mais </v-btn>
      </v-card-actions>
      </router-link>
  </v-card>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
</style>
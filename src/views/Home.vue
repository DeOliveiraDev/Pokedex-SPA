<template>
  <!-- CARD -->
  <v-card v-if="PokeInfo.sprites" class="mx-auto rounded-lg mt-1" max-width="350">
    <v-img
      max-height="260px"
      :src="PokeInfo.sprites.other['official-artwork'].front_default">
    </v-img>
    <v-card-title class="blue--text"> {{PokeInfo.name.toUpperCase()}}</v-card-title>

    <v-card-text class="d-flex typebox">
      
      <div class="type">
        {{PokeInfo.types[0].type.name.toUpperCase()}}
      </div>
      <div class="type">
        {{PokeInfo.types[1].type.name.toUpperCase()}}
      </div>
    </v-card-text>

    <!-- Botão de Interação -->
    <v-card-actions>
      <v-btn color="orange" text> Veja Mais </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      PokeInfo: []
    }
  },
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.PokeInfo = json
        console.log(this.PokeInfo)
      })
  }
}
</script>

<style scoped>
 .type{
   background-color: rgb(237, 101, 101);
   border-radius: 5px;
   text-align: center;
   width: 70px;
   padding: 10px;
   color: white;
 }
 .typebox {
   justify-content: space-evenly;
 }
</style>
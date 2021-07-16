<template>
  <!-- CARD -->
  <v-card
    v-if="PokeInfo.sprites"
    class="mx-auto rounded-xl mt-1"
    max-width="350"
  >
    <!-- IMAGEM -->
    <v-img
      max-height="260px"
      :src="PokeInfo.sprites.other['official-artwork'].front_default"
    >
    </v-img>
    <!-- INFORMAÇÃO -->
    <v-card-title> {{ PokeInfo.name.toUpperCase() }}</v-card-title>

    <v-card-text>
      <p>WEIGHT: {{ PokeInfo.weight }}</p>
      <p>HEIGHT: {{ PokeInfo.height }}</p>
    </v-card-text>

    <v-card-text class="d-flex typebox">
      <p>TYPE:</p>
      <div class="type">
        {{ PokeInfo.types[0].type.name.toUpperCase() }}
      </div>
      <div class="type">
        {{ PokeInfo.types[1].type.name.toUpperCase() }}
      </div>
    </v-card-text>

    <v-card-text class="d-flex abilitybox">
      <p>ABILITIES:</p>
      <div class="type">
        {{ PokeInfo.abilities[0].ability.name.toUpperCase() }}
      </div>
      <div class="type">
        {{ PokeInfo.abilities[1].ability.name.toUpperCase() }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PokeCharizard",
  data() {
    return {
      PokeInfo: [],
    };
  },
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.PokeInfo = json;
        console.log(this.PokeInfo);
      });
  },
};
</script>

<style scoped>
.type {
  background-color: rgba(255, 0, 0, 0.652);
  border-radius: 5px;
  text-align: center;
  min-width: 70px;
  padding: 2px;
  color: white;
  margin-left: 13px;
}
.typebox {
  justify-content: start;
  margin-top: -32px;
}
p {
  font-size: 15px;
  line-height: 10px;
}

.abilitybox {
  margin-top: -19px;
}
</style>

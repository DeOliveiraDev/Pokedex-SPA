<template>
  <v-card>
    <v-app-bar class="rounded-b-xl" color="red darken-2" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Pokedex</v-toolbar-title>
    </v-app-bar>

    <!-- SIDEBAR CONFIG -->
    <v-navigation-drawer v-model="drawer" height="100vh" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red--text text--darken-2">

          <!-- SIDEBAR ITEM 1 -->
          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </router-link>

          <!-- SIDEBAR ITEM 2 -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "PokeInfo",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
</style>
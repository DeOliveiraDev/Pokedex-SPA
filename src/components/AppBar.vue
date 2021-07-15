<template>
  <v-card class="mx-auto overflow-hidden" height="600" width="100vw">
    <v-app-bar class="rounded-br-xl" color="transparent" white>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Pokedex</v-toolbar-title>
    </v-app-bar>

    <!-- SIDEBAR CONFIG -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

          <!-- SIDEBAR ITEM 1 -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

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
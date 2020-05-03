<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <a class="item">Galleries</a>
        <a class="item">Upload</a>
        <a class="item" @click="logout">Logout</a>
      </div>
      <div v-else>
        <a href="#" class="ui item" @click="login">Log in</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
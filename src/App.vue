<template>
  <div class="header">
    <router-link to="/">
      <span>
        <img width="18" src="./assets/imgs/baind.svg" alt="" /> Logica
        Descomplicada</span
      >
    </router-link>
    <nav class="naveg">
      <router-link class="naveg-cont" to="/content">Livros</router-link>
      <router-link class="naveg-cont" to="/table">Desafio</router-link>
      <router-link class="naveg-cont" to="/employees"
        >Colaboradores</router-link
      >
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
import content from "./views/content.vue";
import employees from "./views/employees.vue";
import table from "./views/game.vue";
import home from "./views/home.vue";

export default {
  name: "App",
  components: {
    content,
    employees,
    table,
    home,
  },
};
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
  background-image: url(./assets/imgs/gb2.jpg);
  background-repeat: repeat;
  background: cover;
  background-size: cover;
}
.header {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  border-bottom: solid 1px rgba(255, 255, 225, 0.5);
  font-size: 24px;
}
.naveg-cont {
  padding: 0 1rem;
}
</style>

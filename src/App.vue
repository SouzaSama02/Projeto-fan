<template>
  <div class="header">
    <router-link to="/">
      <span>Logica Descomplicada</span>
    </router-link>
    <nav class="naveg">
      <router-link class="naveg-cont" to="/content">Biblioteca</router-link>
      <router-link class="naveg-cont" to="/table">Desafio</router-link>
      <router-link class="naveg-cont" to="/employees"
        >Colaboradores</router-link
      >
    </nav>
  </div>
  <router-view></router-view>
  <employees />
</template>

<script>
import content from "./views/content.vue";
import employees from "./views/employees.vue";
import table from "./views/table.vue";
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
.header {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  border-bottom: solid 1px white;
}
.naveg-cont {
  padding: 0 1rem;
}
</style>

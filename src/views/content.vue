<script>
export default {
  name: "content",
  data() {
    return {
      nome: "",
    };
  },
};
</script>

<template>
  <main>
    <div class="cont-box">
      <h2>Livros Gratuitos</h2>
      <span
        >Explore nosso vasto armazém de conhecimento, onde as páginas são
        portais para aventuras infinitas e os livros são guardiões de sabedoria.
      </span>
      <div class="books">
        <a
          class="buttom-acess"
          target="_blank"
          href="https://github.com/free-educa/free-livros"
          >ACESSAR ARMAZEM</a
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 600px;
  display: flex;
  text-align: center;
  justify-content: center;
  color: white;
}

.buttom-acess {
  color: white;
  margin-top: 3vw;
  display: inline-block;
  background: rgba(25, 250, 22, 0.4);
  border: solid 1px black;
  border-radius: 5px;
  padding: 1em 3em;
}

.buttom-acess:hover {
  background: rgba(25, 250, 22, 0.6);
}
.cont-box {
  align-content: center;
}
h2 {
  font-size: 4rem;
}
</style>

<script>
export default {
  name: "Home",
};
</script>

<template>
  <section>
    <div class="box-info">
      <h1>Logica Descomplicada</h1>
      <p>
        Descubra a lógica de forma simples! Logica Descomplicada é sua
        ferramenta essencial para dominar a tabela verdade. Explore nosso método
        intuitivo e mergulhe no mundo da lógica de forma descomplicada e eficaz.
      </p>
      <router-link class="buttom-start glass" to="/table">Começar</router-link>
    </div>
    <div class="box-img">
      <img src="../assets/imgs/baind.svg" alt="" />
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-content: center;
  gap: 15vw;
  width: 800px;
  height: 40vw;
  padding: 25vh 0;
  margin: 0 auto;
}

.glass {
  background: rgba(255, 255, 225, 0.1);
  backdrop-filter: blur(10px);
}

.buttom-start {
  margin-top: 2vw;
  display: inline-block;
  padding: 0.5em 4em;
  border-radius: 5px;
  background: rgba(25, 250, 22, 0.4);
  backdrop-filter: blur(10px);
}

h1 {
  color: white;
  font-size: 3rem;
}
.box-info {
  text-align: left;
}

.box-img {
  margin: 2rem auto;
}
p {
  font-size: 18px;
  margin-top: 1em;
  width: 50ch;
  color: rgba(255, 255, 255, 0.9);
}
</style>

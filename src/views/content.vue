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
      <h2>Biblioteca</h2>
      <span
        >Aqui você pode aprender e explorar um pouco do conteudo antes de ir
        para o desafio</span
      >
      <div class="books">
        <div class="books-item">
          <iframe
            type="text/html"
            sandbox="allow-scripts allow-same-origin allow-popups"
            width="336"
            height="250"
            frameborder="0"
            allowfullscreen
            style="max-width: 100%"
            src="https://ler.amazon.com.br/kp/card?asin=B094RC6F3C&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_JFQ0RVM0WTJSTS95B1J1"
          ></iframe>
          <h3>
            A lógica do Cisne Negro (Edição revista e ampliada): O impacto do
            altamente improvável
          </h3>
        </div>
        <div class="books-item">
          <iframe
            type="text/html"
            sandbox="allow-scripts allow-same-origin allow-popups"
            width="336"
            height="250"
            frameborder="0"
            allowfullscreen
            style="max-width: 100%"
            src="https://ler.amazon.com.br/kp/card?asin=B0BSCWYKNT&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_FB6Z1VZGWZ4GNJR6X2JV"
          ></iframe>
          <h3>Matemática para Computação: Fundamentos e Aplicações</h3>
        </div>
        <div class="books-item">
          <iframe
            type="text/html"
            sandbox="allow-scripts allow-same-origin allow-popups"
            width="336"
            height="250"
            frameborder="0"
            allowfullscreen
            style="max-width: 100%"
            src="https://ler.amazon.com.br/kp/card?asin=B07CRPG38F&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_Y7BK9E8TTV4VW088V1WE"
          ></iframe>
          <h3>
            Introdução à Visão Computacional: Uma abordagem prática com Python e
            OpenCV
          </h3>
        </div>
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
}
.cont-box {
  align-content: center;
}
h2 {
  font-size: 4rem;
}
.books {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
}

.books-item {
  padding: 1em;
  width: 240px;
  height: 400px;
  border: 2px solid white;
  border-radius: 5%;
}
</style>

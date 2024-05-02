import "./assets/main.css";
import { createApp } from "vue"; // Importando a função para criar a aplicação Vue

import App from "./App.vue"; // Importando o componente App
import router from "./router"; // Importando a biblioteca para roteamento

const app = createApp(App); // Criando a aplicação Vue

app.use(router); // Usando o roteador

app.mount("#app"); // Montando a aplicação no elemento com id="app" no HTML

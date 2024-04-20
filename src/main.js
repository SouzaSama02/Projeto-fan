import "./assets/main.css";

import { createApp } from "vue"; // importando a função de criar a aplicação da biblioteca vue
import App from "./App.vue"; // importando componente app
import router from "./router"; // importando a biblioteca necessaria para realizar o roteamento da aplicação

const app = createApp(App); // definindo um constante app que recebe o componente App da 4 linha para criação do appp

app.use(router); // executando o roteamento

app.mount("#app"); // montando a aplicação no id="app" no html

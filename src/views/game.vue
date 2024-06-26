<template>
  <div class="box-game">
    <div
      class="game-wrapper glass"
      style="display: flex; justify-content: center; flex-direction: column"
    >
      <div class="button-row glass">
        <button class="glass" @click="decreaseLevel">
          Diminuir dificuldade
        </button>
        <button
          class="glass"
          v-if="condition === 'playing'"
          @click="verifyWinCondition"
        >
          Verificar resposta
        </button>
        <button class="glass" @click="restartGame" v-else>
          Reiniciar o jogo
        </button>
        <button class="glass" @click="increaseLevel">
          Aumentar dificuldade
        </button>
      </div>
      <h1 v-if="condition !== 'playing'">
        {{ condition === "lose" ? "você perdeu" : "você venceu" }}
      </h1>
      <table class="game__table">
        <tr>
          <th v-for="head in headerArray" class="game__table-cell">
            <p v-if="head.type === 'variable'">{{ head.value }}</p>
            <p v-else>{{ stringifyProposition(head.value) }}</p>
          </th>
        </tr>
        <tr v-for="(row, index1) in fieldsArray">
          <td
            v-for="(value, index2) in row"
            @click="selectValue(index1, index2)"
            class="game__table-cell"
            :class="{
              'text-green': value === true,
              'text-red': value === false,
              wrong:
                condition !== 'playing' &&
                resultArray[index1][index2] === false &&
                index2 > levels[actualLevel].variablesNum - 1,
              'prop-cell':
                condition === 'playing' &&
                index2 > levels[actualLevel].variablesNum - 1,
            }"
          >
            {{ value === null ? " " : value ? "VERDADEIRO" : "FALSO" }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

const headerArray = ref([]);
const fieldsArray = ref([]);
const winCondition = ref([]);
const condition = ref("playing");
const usedVariables = ref([]);
const resultArray = ref([]);
const actualLevel = ref(0);

const possibleVariables = ["x", "y", "z", "w"];
const possibleConnectives = ["e", "ou"];

const levels = [
  { name: "easy", max: 1, variablesNum: 2 },
  { name: "normal", max: 2, variablesNum: 2 },
  { name: "hard", max: 2, variablesNum: 3 },
  { name: "veryHard", max: 2, variablesNum: 4 },
  { name: "almostImpossible", max: 3, variablesNum: 4 },
  { name: "godLevel", max: 4, variablesNum: 4 },
];

function stringifyProposition(proposition) {
  if (proposition.type === "variable") {
    return proposition.value;
  } else {
    const left = stringifyProposition(proposition.left);
    const right = stringifyProposition(proposition.right);
    const connective = proposition.connective;
    return `(${left} ${connective} ${right})`;
  }
}

function getRandomVariable() {
  const availableVariables = possibleVariables.filter(
    (variable) => !usedVariables.value.includes(variable)
  );
  if (availableVariables.length === 0) {
    throw new Error("Não há mais variáveis disponíveis.");
  }
  const randomIndex = Math.floor(Math.random() * availableVariables.length);
  const selectedVariable = availableVariables[randomIndex];
  return selectedVariable;
}

function generateRandomProposition(maxDepth = 1, currentDepth = 0) {
  if (currentDepth === maxDepth) {
    const randomVariable =
      usedVariables.value[
        Math.floor(Math.random() * usedVariables.value.length)
      ];
    return { type: "variable", value: randomVariable };
  } else {
    const connective =
      possibleConnectives[
        Math.floor(Math.random() * possibleConnectives.length)
      ];
    let leftProposition, rightProposition;
    do {
      leftProposition = generateRandomProposition(maxDepth, currentDepth + 1);
      rightProposition = generateRandomProposition(maxDepth, currentDepth + 1);
    } while (
      JSON.stringify(leftProposition) === JSON.stringify(rightProposition)
    );

    return {
      type: "proposition",
      connective,
      left: leftProposition,
      right: rightProposition,
    };
  }
}

function mountHeader() {
  for (let i = 0; i < levels[actualLevel.value].variablesNum; i += 1) {
    const variable = getRandomVariable();
    usedVariables.value.push(variable);
    headerArray.value.push({ type: "variable", value: variable });
  }
  const proposition = generateRandomProposition(levels[actualLevel.value].max);
  headerArray.value.push({ type: "proposition", value: proposition });
}

function mountFields() {
  const rows = Math.pow(2, levels[actualLevel.value].variablesNum);
  const columns = levels[actualLevel.value].variablesNum;
  fieldsArray.value = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const isTrue = (i & (1 << j)) !== 0;
      row.unshift(isTrue);
    }
    row.push(null);
    fieldsArray.value.push(row);
  }
}

function mountWinCondition() {
  winCondition.value = [];
  for (let i = 0; i < fieldsArray.value.length; i++) {
    const rowEvaluation = [];

    for (let j = 0; j < headerArray.value.length; j++) {
      if (headerArray.value[j].type === "variable") {
        rowEvaluation.push(fieldsArray.value[i][j]);
      } else {
        const proposition = headerArray.value[j].value;
        const truthValues = fieldsArray.value[i].map((value) => value === true);
        rowEvaluation.push(evaluateProposition(proposition, truthValues));
      }
    }
    winCondition.value.push(rowEvaluation);
  }
}

function evaluateProposition(proposition, truthValues) {
  if (proposition.type === "variable") {
    const index = headerArray.value.findIndex(
      (obj) => obj.value === proposition.value
    );
    return truthValues[index];
  } else {
    const leftResult = evaluateProposition(proposition.left, truthValues);
    const rightResult = evaluateProposition(proposition.right, truthValues);
    if (proposition.connective === "e") {
      return leftResult && rightResult;
    } else {
      return leftResult || rightResult;
    }
  }
}

function selectValue(arrayX, arrayY) {
  if (arrayY === 0 || arrayY === 1) {
    return;
  }
  if (fieldsArray.value[arrayX][arrayY] === null) {
    return (fieldsArray.value[arrayX][arrayY] = true);
  }
  if (fieldsArray.value[arrayX][arrayY] === true) {
    return (fieldsArray.value[arrayX][arrayY] = false);
  }
  fieldsArray.value[arrayX][arrayY] = true;
}

function verifyWinCondition() {
  let allFilled = true;
  for (let i = 0; i < fieldsArray.value.length; i++) {
    if (fieldsArray.value[i][fieldsArray.value[i].length - 1] === null) {
      allFilled = false;
      break;
    }
  }
  if (!allFilled) {
    alert(
      "Preencha todas as respostas antes de verificar a condição de vitória"
    );
    return;
  }
  resultArray.value = fieldsArray.value.map((row) => row.slice());
  let gameWon = true;
  for (let i = 0; i < fieldsArray.value.length; i++) {
    for (let j = 0; j < headerArray.value.length; j++) {
      const isCorrect = fieldsArray.value[i][j] === winCondition.value[i][j];
      if (!isCorrect) {
        resultArray.value[i][j] = false;
        gameWon = false;
      } else {
        resultArray.value[i][j] = true;
      }
    }
  }
  condition.value = gameWon ? "win" : "lose";
}

function decreaseLevel() {
  if (actualLevel.value === 0) {
    return;
  }
  actualLevel.value -= 1;
  restartGame();
}

function increaseLevel() {
  if (actualLevel.value === levels.length - 1) {
    return;
  }
  actualLevel.value += 1;
  restartGame();
}

function startGame() {
  mountHeader();
  mountFields();
  mountWinCondition();
}

function restartGame() {
  headerArray.value = [];
  fieldsArray.value = [];
  winCondition.value = [];
  usedVariables.value = [];
  condition.value = "playing";
  startGame();
}

onBeforeMount(() => {
  startGame();
});
</script>

<style scoped>
.box-game {
  height: 49vh;
}
.glass {
  background: rgba(255, 255, 225, 0.1);
  backdrop-filter: blur(10px);
}

.game-wrapper {
  margin: 5vh auto;
  color: white;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: -moz-fit-content;
  width: fit-content;
}

.game__table {
  font-size: 20px;
  border-collapse: separate;
  border: 3px solid black;
  width: auto;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.game__table-cell {
  border: 1px solid black;
  width: auto;
  height: 50px;
  text-align: center;
  min-width: 200px;
  vertical-align: middle;
}

.wrong {
  background-color: red;
  color: black !important;
}

.border-top-left {
  border-top-left-radius: 10px;
}

.border-top-right {
  border-top-right-radius: 10px;
}

.border-bottom-left {
  border-bottom-left-radius: 10px;
}

.border-bottom-right {
  border-bottom-right-radius: 10px;
}

.button-row {
  display: flex;
  justify-content: center;
  width: 100% !important;
  height: 60px;
  margin-bottom: 30px;
  width: auto;
  border: none;
  gap: 20px;
}

.button-row button {
  color: white;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  padding: 0;
  height: auto;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button-row button:hover {
  opacity: 0.5;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}

.prop-cell {
  cursor: pointer;
}

.prop-cell:hover {
  background: rgba(255, 255, 225, 0.1);
  backdrop-filter: blur(20px);
}
</style>

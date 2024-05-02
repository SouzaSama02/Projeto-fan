<template>
  <div class="team">
    <h1>Equipe do Projeto</h1>
    <div class="box">
      <div v-for="(member, index) in team" :key="index" class="member">
        <h2>{{ member.name }}</h2>
        <p>{{ member.role }}</p>
        <div class="social-links">
          <a v-if="member.social.github" :href="member.social.github">
            <img src="../assets/imgs/code-branch-solid.svg" alt="GitHub" />
            GitHub
          </a>
          <a v-if="member.social.linkedin" :href="member.social.linkedin">
            <img src="../assets/imgs/user-solid.svg" alt="LinkedIn" />
            LinkedIn
          </a>
          <!-- Adicione mais redes sociais conforme necessário -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Rodrigo Beckmann",
          role: "Desenvolvedor Frontend",
          social: {
            github: "https://github.com/rodrigobeckmann",
            linkedin: "https://www.linkedin.com/in/rodrigobeckmann/",
          },
        },
        {
          name: "João Victor",
          role: "Desenvolvedor Front-End",
          social: {
            github: "https://github.com/SouzaSama02",
            linkedin: "https://www.linkedin.com/in/victor-souza-neves/",
          },
        },
        {
          name: "Gustavo Carneiro",
          role: "Desenvolvedor Back-End",
          social: {
            github: "https://github.com",
            linkedin:
              "https://www.linkedin.com/in/gustavo-carneiro-lima-a346b724b/",
          },
        },
        {
          name: "Wander Santana",
          role: "Desenvolvedor Games",
          social: {
            github: "https://github.com",
            linkedin: "https://www.linkedin.com/in/wander-santana-763594270/",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 4em;
  color: #fff;
  margin-bottom: 30px;
}
.team {
  text-align: center;
  padding: 50px 0;
}
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.members {
  justify-content: center;
}

.member {
  width: calc(66.66% - 40px);
  margin: 20px auto;
  border: solid 1px;
  border-radius: 5px;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
}

.member:hover {
  transform: translateY(-10px);
}

.member-box {
  background-color: #ffffff;
  padding: 20px;
  border: 2px solid #333333;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.member-box:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-top: 0;
  font-size: 28px;
  color: #fff;
}

p {
  margin-bottom: 15px;
  font-size: 18px;
  color: #fff;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-links a {
  margin-left: 10px;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
}

.social-links a:hover {
  transform: scale(1.2);
}
</style>

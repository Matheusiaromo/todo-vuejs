<template>
  <div class="tarefas">
    <header>
      <span>Math/tasks</span>
      <div>
        <span v-if="!$store.state.usuario.nome">Olá, Visitante</span>
      <span v-else>Olá, {{ this.$store.state.usuario.nome}}</span>
      </div>
      <button @click="deslogarUsuario" class="btn">Deslogar</button>
    </header>
    <div>
      
    </div>
    <div class="input">
      <h5>Quais são seus objetivos hoje?</h5>
      <form  @submit.prevent="adicionarTarefa"
  method="POST">
        <input type="text" id="nome" name="nome" placeholder="Ex: Dever de matematica" v-model="tarefa">
        <input class="btn" type="submit" value="Adicionar">
      </form>
    </div>
    <div class="links">
      <router-link to="/tarefas">Pendentes</router-link>
      <router-link to="/completas">Completas</router-link>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>

import {api} from '@/services'
export default {
  name: "Tarefas",
  data() {
    return {
      tarefa: ""
    }
  },
 methods: {
    adicionarTarefa() { 
    api.post("/api/tarefas", {
      "tarefa" : this.tarefa
    }).then(response => {
      console.log(response);
      this.$store.dispatch("getUsuarioTarefas")
    })
    this.tarefa = ""
    },
    deslogarUsuario() {
      this.$store.dispatch("deslogarUsuario")
      this.$router.push("/")
    }
 }
}
</script>

<style scoped>

.links {
  display: flex;
  justify-content: space-around;
  background-color: #E3E3E5;
  padding: 18px;
  margin-top: 10px;
}

.links a {
  color: #000;
}


form input::-webkit-input-placeholder {
   color: rgba(0, 0, 0, .2);
   font-weight: 600;
}

.btn {
  margin-left: 10px;
}

.input {
  margin-top: 40px;
  margin-left: 20px;
}



form input {
  padding: 12px 15px;
  border: none;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;

}

div.tarefas {
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 900px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #5C79DF;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  align-items: center;
}

  span {
    font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 18px;
color: #5C79DF;
  }
</style>
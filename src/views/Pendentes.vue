<template>
  <ul>
    <li v-if="!$store.state.tarefas">Nenhuma tarefa cadastrada</li>
    <li v-for="tarefa in tarefas" :key="tarefa.ID" >
      <div>{{tarefa.post_name}}</div>
      <div class="delete"><button @click="deletarTarefa(tarefa.ID)">X</button></div>
    </li>  
  </ul>
</template>

<script>
import {api} from '@/services'
import {mapState, mapActions} from 'vuex'
export default {
  name: "Tarefas",
  data() {
    return {
      tarefa: {
        nome: ""
      }
    }
  },
  methods: {
    ...mapActions(["getUsuarioTarefas"]),
    deletarTarefa(id){
      const confirmar = window.confirm("Deseja remover esse produto?")
      if(confirmar)
      api.delete(`/api/tarefas/${id}`).then(()=> {
        this.getUsuarioTarefas()
      }).catch(error => {
        console.log(error.response);
      }) 
    }
    
  },
  computed: {
    ...mapState(["login", "usuario", "tarefas"])
  },
  watch: {
    login() {
      this.getUsuarioTarefas()
    }
  },
  created() {
    if(this.login) {
      this.getUsuarioTarefas()
    }
  }
}
</script>

<style>
ul {
  width: 100%;
  background-color: grey;
}

li {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.2);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete button {
  background-color: #f009;
  color: #fff;
  border: none;
  box-shadow: 1px 4px 8px rgba(0,0,0,.2);
  border-radius: 5px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  font-weight: bold;
}
</style>
<template>
  <ul class="overf">
    <li v-if="!$store.state.tarefas">Nenhuma tarefa cadastrada</li>
    <li v-for="tarefa in tarefas" :key="tarefa.id" >
      <div>{{tarefa.tarefa}}</div>
        <div> 
          <button @click="completarTarefa(tarefa.id)" class="completar">Completar</button> 
          <button class="delete" @click="deletarTarefa(tarefa.id)">X</button>
        </div>
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
    ...mapActions(["getTarefasPendentes", "getTarefasCompletas"]),
    deletarTarefa(id){
      const confirmar = window.confirm("Deseja remover esse produto?")
      if(confirmar)
      api.delete(`/api/tarefas/${id}`).then(()=> {
        this.getTarefasPendentes()
      }).catch(error => {
        console.log(error.response);
      }) 
    },
    completarTarefa(id) {
      api.put(`/api/tarefas/${id}`).then(()=> {
        this.getTarefasPendentes()
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
      this.getTarefasPendentes()
    }
  },
  created() {
    if(this.login) {
      this.getTarefasPendentes()
    }
  }
}
</script>

<style scoped>
.overf {
  overflow-y: scroll;
  max-height: 400px;
}
ul {
  width: 100%;
  padding: 0px 20px;
  background-color: #fff;
}

li {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.2);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete  {
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

.delete:hover {
  transform: scale(1.05);
}

.completar {
  border: none;
  padding: 5px;
  background-color: aquamarine;
  border-radius: 5px;
  box-shadow: 1px 4px 8px rgba(0,0,0,.2);
  margin-right: 5px;
  cursor: pointer;
}

.completar:hover {
  transform: scale(1.05);
}
</style>
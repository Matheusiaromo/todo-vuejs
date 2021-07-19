<template>
  <ul class="overf">
    <li v-if="!$store.state.tarefas">Nenhuma tarefa cadastrada</li>
    <li v-for="tarefa in tarefas.pendentes" :key="tarefa.id" >
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

ul li:nth-child(even) {background: #FFF}
ul li:nth-child(odd) {background: #EEE}

ul {
  list-style: none;
}

li {
  padding: 10px 20px;
  font-weight: 600;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.delete {
  width: 20px;
  height: 20px;
  background-color: #f005;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 600;
}

.completar {
  height: 20px;
  background-color: #49BF71;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 600;
  padding: 0 5px ;
  margin-right: 5px;
  
}

.delete:hover , .completar:hover {
  transform: scale(1.05);
}
</style>
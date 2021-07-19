<template>
  <!-- <ul class="overf">
    <li v-if="!$store.state.tarefas.completas">Nenhuma tarefa completa</li>
    <li v-for="completa in tarefas.completas" :key="completa.id" >
      {{completa.tarefa}}
    </li>  
  </ul> -->
  <ul class="completas">
     <li v-if="!$store.state.tarefas.completas">Nenhuma tarefa completa</li>
    <li :class="{ active: alternarCor = !alternaCor }" v-for="completa in tarefas.completas" :key="completa.id">
        {{completa.tarefa}}
    </li>
  </ul>
</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
  name: "Completas",
  data() {
    return {
      alternaCor: true,
      tarefa: {
        nome: ""
      }
    }
  },
  methods: {
    ...mapActions(["getTarefasCompletas"]),
  },
  computed: {
    ...mapState(["login", "usuario", "tarefas"])
  },
  watch: {
    login() {
      this.getTarefasCompletas()
    }
  },
  created() {
    if(this.login) {
      this.getTarefasCompletas()
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
}

</style>
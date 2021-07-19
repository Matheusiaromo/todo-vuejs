<template>
  <ul class="overf">
    <li v-if="!$store.state.completas">Nenhuma tarefa completa {{$store.state.completas}}</li>
    <li v-for="completa in completas" :key="completa.id" >
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
      tarefa: {
        nome: ""
      }
    }
  },
  methods: {
    ...mapActions(["getTarefasCompletas"]),
  },
  computed: {
    ...mapState(["login", "usuario", "completas"])
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


</style>
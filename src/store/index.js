import Vue from 'vue'
import Vuex from 'vuex'
import {api} from '@/services'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: '',
      nome: ''
    },
    tarefas: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload
    },
    UPDATE_USUARIO_TAREFAS(state, payload) {
      state.tarefas = payload
    },
    ADD_USUARIO_TAREFAS(state, payload) {
      state.tarefas.unshit(payload)
    }

  },
  actions: {
    getUsuarioTarefas(context) {
      api.get(`/api/tarefas`).then(response => {
        console.log(response)
        context.commit("UPDATE_USUARIO_TAREFAS", response.data.data)
        console.log(response.data)
      })
    },
    logarUsuario(context, payload) {
      return api.login({
      username: payload.username,
      password: payload.password
    }).then(response => {
      window.localStorage.token = `Bearer ${response.data.token}`
      })
    },
    getUsuario(context ){
      api.get("/api/usuario").then(response => {
        context.commit("UPDATE_USUARIO", response.data)
        context.commit("UPDATE_LOGIN", true)
      })
    },
    criarUsuario(context, payload) {
      api.post("/api/usuario", payload).then(response => {
        context.commit("UPDATE_USUARIO", response.data)
        context.commit("UPDATE_LOGIN", true)
      })
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
          id: '',
          nome: ''
      })
      window.localStorage.removeItem("token")
      context.commit("UPDATE_LOGIN", false)
    }
  },
  modules: {
  }
})

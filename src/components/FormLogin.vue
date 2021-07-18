<template>
  
  <form  @submit.prevent="logar"
  method="POST">
    <label for="username">Username</label>
    <input name="username" id="username" type="text" v-model="login.username" placeholder="Ex: Matheus123@gmail.com">
    <label for="password">Senha</label>
    <input name="password" v-model="login.password" id="password" type="password" >
    <input class="btn" type="submit" value="Acessar">
    <ErroNotificacao :erros="erros"></ErroNotificacao>
  </form>

</template> 

<script>
/* import { api } from '@/services.js' */

export default {
  name: "FormLogin",
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      erros: []
      
    }
  },
  methods: {
     logar(){
       this.erros = []
        this.$store.dispatch("logarUsuario", this.login).then(() => {       
        this.$store.dispatch("getUsuario")
        this.$router.push("/tarefas")
      }).catch(error => {
        this.erros.push(error.response.data.message)
      })
    }
  }
}
</script>


<style scoped>



form {
  max-width: 600px;
  min-width: 380px;
  background-color:#BFC9ED ;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
}

  form input::-webkit-input-placeholder {
   color: rgba(0, 0, 0, .2);
   font-weight: 600;
}

form input {
  padding: 12px 15px;
  border: none;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;

}

label {
  text-align: start;
}




</style>
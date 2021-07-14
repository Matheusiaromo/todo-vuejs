<template>
  
  <form  @submit.prevent="criarConta"
  method="POST">
    <label for="nome">Nome</label>
    <input name="nome" id="nome" type="text" v-model="form.username" placeholder="Ex: Matheus123">
    <label for="email">E-mail</label>
    <input name="email" id="email" type="email"  v-model="form.email" placeholder="Ex: Matheus123@gmail.com">
    <label for="senha">Senha</label>
    <input name="senha"  v-model="form.password" id="senha" type="password" >
    <input class="btn" type="submit" value="Criar Conta">
    
  
  </form>

</template> 

<script>


export default {
  name: "FormCriarConta",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
     async criarConta(){
      try {
        await this.$store.dispatch('criarUsuario', {
          "username": this.form.username,
          "email": this.form.email,
          "password": this.form.password
        })
        await this.$store.dispatch("logarUsuario", {
          "username": this.form.email,
          "password": this.form.password
        })
        await this.$store.dispatch("getUsuario")
        this.$router.push("/tarefas")
      } catch (error) {
        console.log(error);
      }
  }
}

}

</script>

<style scoped>

form {
  max-width: 600px;
  min-width: 400px;
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
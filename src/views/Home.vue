<template>
  <div class="home" >
    <h1>Bem vindo ao projeto
Math/tasks </h1>

  <h2>Um site pra cadastrar tarefas simples, porem adquiri muito conhecimento em API REST, autenticação com JWT e consumir API no front-end com Axios</h2>

<p>Faça o login pra testar o meu projeto</p>
    <FormLogin />

    <p>Não tem cadastro?</p>
    <button class="btn"><router-link to="/registrar">Crie sua conta aqui</router-link></button>
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'Home',
  components: {
    FormLogin
  }
  
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 80px;
}

div h2 {
  max-width: 400px;
}


</style>

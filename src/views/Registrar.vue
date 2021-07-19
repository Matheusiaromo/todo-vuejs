<template>
  <div>
    <h1>Bem vindo ao projeto
Math/tasks </h1>

  <h2>Um site pra cadastrar tarefas simples, porem adquiri muito conhecimento em API REST, autenticação com JWT e consumir API no front-end com Axios</h2>

<p>Crie sua conta pra testar meu projeto</p>
    <FormCriarConta />

    <p>Já tem cadastro?</p>
    <button class="btn" ><router-link to="/">Faça o login aqui</router-link></button>
  </div>
</template>

<script>
import FormCriarConta from '@/components/FormCriarConta.vue'

export default {
  name: 'Home',
  components: {
    FormCriarConta
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
  margin-bottom: 20px;

}
</style>

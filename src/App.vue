<template>
  <div id="app">
   
    
    <router-view class="routerview" ></router-view>
    <Footer />
  
  </div>
</template>

<script>
import {api} from '@/services'
import Footer from '@/components/Footer.vue'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    Footer
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
    if(window.localStorage.token) {
      api.validateToken().then(() => {
        this.$store.dispatch("getUsuario")
      }).catch(() => {
        window.localStorage.removeItem("token")
      })
    }
    if(this.login) {
      this.getTarefasCompletas()
    }
}

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');

.routerview {
  flex: 1;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body, html {
  font-family: 'Montserrat', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}



body {
  background: #CED2E0;
}


.btn {
  background: #5C79DF;
border-radius: 5px;
border: none;
padding: 10px 20px;
color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

h1 {
  font-style: normal;
font-weight: 900;
font-size: 28px;
line-height: 34px;
color: #5C79DF;
text-align: center;
}

h2 {
  font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: rgba(0, 0, 0, 0.62);
text-align: center;
}

p {
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #1844E0;
}


</style>

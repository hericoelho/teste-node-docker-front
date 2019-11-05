<template>
  <div class="login">
    <md-toolbar class="center-xs">
      <div class="md-title">Plataforma de Ensino Personalizado</div>
    </md-toolbar>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1 center-xs">
          <md-subheader class="center-xs">Faça seu login agora</md-subheader>
          <form v-on:submit="handleSubmit($event)">
            <md-input-container>
              <label>E-mail</label>
              <md-input v-model="user.email"></md-input>
            </md-input-container>
            <md-input-container md-has-password>
              <label>Senha</label>
              <md-input type="password" v-model="user.password"></md-input>
            </md-input-container>
            <md-button type="submit" class="md-raised md-primary">
              <md-icon class>send</md-icon>Entrar
            </md-button>
            <router-link to="signup" tag="md-button" class="md-primary">Quero me cadastrar</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      // Auth
      this.$auth.login({
        params: this.user,
        success: function () {
          console.log('Usuário logado com sucesso.')
        },
        error: function () {
          console.log('Usuário e/ou senha inválidos.')
        },
        rememberMe: true,
        redirect: '/list'
      })
    }
  }
}
</script>

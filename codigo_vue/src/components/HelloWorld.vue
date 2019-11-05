<template>
  <div class="Sobre">
    <h1>Sobre</h1>
    <p>Frontend construido em Vue com jwt e vue-material para integração com backend</p>
    <router-link tag="md-button" class="md-raised md-primary" to="/list">
      <md-icon>arrow_back</md-icon> voltar para login
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Sobre',
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="dashboard-inputs">
    <div class="container">
      <div class="row">
        <div class="col s12" v-for="user in users" v-bind:key="user._id">
          <div class="card center">
            <div class="card-content">
              <span class="card-title">{{user.nome}}</span>
              <p>{{' cpf: '+user.cpf}}</p>
            </div> <!-- .card-content -->
          </div> <!-- .card -->
        </div> <!-- .col -->
      </div> <!-- .row -->
    </div> <!-- .container -->
  </div> <!-- .dashboard-inputs -->
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      resource: this.$resource(process.env.API + '{/id}'),
      users: []
    }
  },
  methods: {
    initialize () {
      this.resource.get({}).then(response => {
        this.users = response.data
      })
    }
  },
  created () {
    this.initialize()
  }
}
</script>

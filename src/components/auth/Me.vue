<template>
  <div class="row login">
    <div class="col-xs-4 offset-xs-4">
      <q-card>
        <q-card-title class="text-center">Me</q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="card-actions inline-block vertical-middle">
            <q-btn label="me" @click="submit()" />
          </div>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Me',
  data () {
    return {

    }
  },
  methods: {
    submit() {

    this.$store.dispatch('user/me')
      .then(response => {
        console.log('response', response);
      })

    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 10%;
  }
</style>

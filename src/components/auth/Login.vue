<template>
  <div class="row login">
    <div class="col-xs-4 offset-xs-4">
      <q-card>
        <q-card-title class="text-center">Login</q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field>
            <q-input type="text" float-label="Email" @blur="$v.form.email.$touch" :error="$v.form.email.$error" v-model="form.email" /><br>
            <q-input type="password"  float-label="Password" @blur="$v.form.password.$touch" :error="$v.form.password.$error" v-model="form.password" />
          </q-field>
          <br>
          <div class="card-actions inline-block vertical-middle">
            <q-btn label="Login" @click="submit()" />
          </div>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        return
      } else {
        this.$store.dispatch('auth/login', this.form)
          .then(response => {
            this.$router.push('/')
          })

      }
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 10%;
  }
</style>

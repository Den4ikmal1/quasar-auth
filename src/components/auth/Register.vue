<template>
  <div class="row login">
    <div class="col-xs-4 offset-xs-4">
      <q-card>
        <q-card-title class="text-center">Register</q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field>
            <q-input type="text" float-label="Email" @blur="$v.form.email.$touch" :error="$v.form.email.$error" v-model="form.email" /><br>
            <q-input type="password"  float-label="Password" @blur="$v.form.password.$touch" :error="$v.form.password.$error" v-model="form.password" /><br>
             <q-input type="password"  float-label="Confirm password" @blur="$v.form.confirmPassword.$touch" :error="$v.form.confirmPassword.$error" v-model="form.confirmPassword" />
          </q-field>
          <br>
          <div class="card-actions inline-block vertical-middle">
            <q-btn label="Submit" @click="submit()" />
          </div>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password')}
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        return
      } else {
        this.$store.dispatch('auth/register', this.form)
          .then((result) => {
            this.$router.push('/');
          }).catch((err) => {
            console.error(err);
          });

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

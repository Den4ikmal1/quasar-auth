<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
         Football 24
          <div slot="subtitle"></div>
        </q-toolbar-title>
        <q-btn v-if="currentUser" label="logout" @click="logout()" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Dashboard</q-list-header>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <Me></Me>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Me from '../components/auth/Me'
import { Auth } from '../mixins/auth'

export default {
  name: 'LayoutDefault',
  mixins: [Auth],
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  components: {
    Me
  },
  methods: {
    openURL,
    logout() {
      this.$store.dispatch('auth/logout')
        .then(response => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>
</style>

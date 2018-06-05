<template>
  <div id="q-app">
          <q-ajax-bar/>
    <router-view />
  </div>
</template>

<script>
import setAxiosHeader from './share/utils/setAxiosHeaderAuthorization'

export default {
  name: 'App',
  created(){
    const token = window.localStorage['user-token'] || ''
    if (token) {
      setAxiosHeader(token)
    }
  }
}
</script>

<style>
</style>

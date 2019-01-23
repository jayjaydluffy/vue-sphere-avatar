<template>
  <div id="app">
    <h1>Vue Sphere Avatar</h1>
    <div class="sampleSpheres">
      <sphere-avatar :src="'https://picsum.photos/200'"></sphere-avatar>
      <sphere-avatar :name="'Strawhat Pirates'"></sphere-avatar>
      <sphere-avatar :name="'San Antonio Spursy'" :initials="'SAS'"></sphere-avatar>
      <sphere-avatar :initials="'InT'" :color="'redorange'"></sphere-avatar>
      <sphere-avatar :initials="'PFL'" :color="'#f0f0f688'"></sphere-avatar>
    </div>
  </div>
</template>

<script>
import logo from './assets/logo.png'

export default {
  name: 'app',
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sampleSpheres {
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin: 0 auto;
}
</style>

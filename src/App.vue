<template>
  <div id="app">
    <div id="nav"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/page1">Page1</router-link>
     </div>
    <router-view/>
    <home></home>
    <page1></page1>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import Page1 from './components/Page1.vue'



export default {
  name: 'App',
  components: {
    // 'home': Home,
    // 'page1': Page1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

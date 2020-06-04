<template>
  <div id="app">
    <HeaderItem />
    <TopPage />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import TopPage from './components/TopPage.vue'
//import HelloWorld from './components/HelloWorld.vue'

//import Contents2 from './components/Contents2.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld,
    HeaderItem,
    TopPage,
  //  Contents2
  },
  data() {
    return { 
     currentView: 'TopPage' 
  }
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
  margin-top: 60px;
}
</style>

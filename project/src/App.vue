<template>
  <div id="app">
    <HeaderItem />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="view1">コンテンツ１</button>
    <button @click="view2">コンテンツ ２</button>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import HelloWorld from './components/HelloWorld.vue'
import Contents1 from './components/Contents1.vue'
import Contents2 from './components/Contents2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderItem,
    Contents1,
    Contents2
  },
  data() {
    return { 
     currentView: 'Contents1' 
  }
  },
  methods: {
    view1() {
      this.currentView = "Contents1"
    },
    view2() {
      this.currentView = "Contents2"
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

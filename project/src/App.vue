<template>
  <div id="app">
    <HeaderItem />
    <TopPage />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import TopPage from './components/TopPage.vue'

export default {
  name: 'App',
  components: {
    HeaderItem,
    TopPage,
  },
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

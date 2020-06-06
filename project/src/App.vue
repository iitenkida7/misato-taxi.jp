<template>
  <div id="app">
    <HeaderItem />
    <router-view />
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'

export default {
  name: 'App',
  components: {
    HeaderItem,
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

body {
	padding-top: 60px;
}
div#wrapper {
	width: 800px;
	margin: 0 auto;
	text-align: left;
	border: 1px solid #FF0000;
}

@media (min-width: 980px) {
	body {
		margin-top: 41px;
	}
}
</style>

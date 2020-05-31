<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" id="home-nav" to="/" exact><a>ホーム</a></router-link>
        <router-link tag="li" id="game-nav" to="/game"><a>ゲーム</a></router-link>
        <router-link tag="li" id="info-nav" to="/info"><a>情報</a></router-link>
        <router-link tag="li" id="gift-nav" to="/gift"><a>お土産</a></router-link>
      </ul>
    </nav>
  </header>
</template>
  <!-- style中身は省略 -->
<style scoped>
</style>

<script>
export default {
  name: 'HeaderItem'
}
</script>
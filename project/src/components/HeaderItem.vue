<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <router-link class="brand" to="/">トップ</router-link>
          <router-link class="brand" to="Ir">会社概要</router-link>
          <router-link class="brand" to="Ir">求人</router-link>
        </div>
      </div>
    </div>
</template>
  <!-- style中身は省略 -->
<style scoped>
</style>

<script>
export default {
  name: 'HeaderItem'
}
</script>

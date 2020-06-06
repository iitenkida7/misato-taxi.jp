<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <router-link class="brand" to="/">トップ</router-link>
          <router-link class="brand" to="ir">会社概要</router-link>
          <router-link class="brand" to="recruit">求人</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderItem'
}
</script>

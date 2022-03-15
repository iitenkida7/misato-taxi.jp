<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <NuxtLink class="navbar-brand" to="/"><span class="small">有限会社</span>三郷交通</NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link btn-tel" href="tel:048-952-3310">タクシーを呼ぶ（電話）</a>
        <NuxtLink class="nav-link" to="/">トップページ</NuxtLink>
        <NuxtLink class="nav-link" to="ir">会社概要</NuxtLink>
        <NuxtLink class="nav-link" to="recruit">求人</NuxtLink>
      </div>
    </div>
  </nav>
</template>

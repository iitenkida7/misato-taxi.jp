<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <router-link class="brand font-weight-bold" to="/">三郷交通</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto justify-content-center">
        <li class="nav-item active">
          <NuxtLink class="brand" to="/">トップ</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="brand" to="ir">会社概要</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="brand" to="recruit">求人</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a:link {
  color: #ffffff;
}

a:visited {
  color: #ffffff;
}

a:hover {
  color: #ffffff;
}

a:active {
  color: #ffffff;
}
</style>

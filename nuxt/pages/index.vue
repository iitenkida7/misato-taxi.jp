<template>
  <div>
    <Header />
    <main role="main" class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm mx-auto rounded mx-auto d-block">
          <img class="rounded mx-auto d-block" src="/image/emblem.png" />
          <TelBottun />
          <div class="col-sm">
            <p>タクシー呼び出し可能エリア:埼玉県三郷市</p>
            <hr />
            <div class="infomation">
              <h3>お知らせ</h3>
              <li>
                <NuxtLink class="brand" to="recruit"
                  >タクシードライバー大募集</NuxtLink
                >
              </li>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

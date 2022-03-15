<template>
  <div>
    <Header />
    <main role="main" class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm mx-auto rounded mx-auto d-block">
          <img class="rounded mx-auto d-block mb-0" src="/image/emblem.png" alt="三郷交通"/>
          <div class="text-center mt-0 mb-5"><h1>三郷交通 / 埼玉県三郷市でタクシーを呼ぶ</h1></div>
          <TelBottun />
          <div class="col-sm">
            <p class="text-center mt-5 mb-4">配車可能エリア: 埼玉県三郷市</p>
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

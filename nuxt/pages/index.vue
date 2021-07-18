<template>
  <div>
    <Head />
    <Header />
    <main role="main" class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm mx-auto rounded mx-auto d-block">
          <img class="rounded mx-auto d-block" src="/image/emblem.png" />
          <a
            class="rounded mx-auto d-block btn btn-primary btn-lg"
            v-on:click="gaEventTel"
            href="tel:048-952-3310"
          >
            048-952-
            <ruby>
              <rb>3310</rb>
              <rt>みさと</rt>
            </ruby>
          </a>
          <div class="col-sm">
            <p>タクシー呼び出し可能エリア:埼玉県三郷市</p>
            <hr />
            <div class="infomation">
              <h3>お知らせ</h3>
              <li>
                <router-link class="brand" to="recruit"
                  >タクシードライバー大募集</router-link
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

<style scoped>
.btn {
  margin: 20px;
  max-width: 260px;
}

p {
  font-weight: bold;
  text-align: center;
}
.infomation {
  font-size: 14px;
  vertical-align: text-top;
  text-align: left;
}

h3 {
  font-size: 20px;
  background-color: MistyRose;
}
</style>

<script>
export default {
  name: "index",
  methods: {
    gaEventTel() {
      this.$ga.event("tel", "misato-taxi", "call", 1);
    }
  },
  title: "三郷交通",

};
</script>

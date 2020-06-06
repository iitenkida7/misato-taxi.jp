<template>
    <div class="container">
      <div class="row">
        <div class="col-md-1 text-center">
          <h1 style="font-size:18px">(有)三郷交通</h1>
          <img style="max-width: 260px; height: auto; margin:auto;display: block" src="@/assets/img/emblem.png">
          <a class="btn pull-center btn-large btn-primary" style="margin: 20px;" v-on:click="gaEventTel" href="tel:048-952-3310">048-952-
            <ruby>
              <rb>3310</rb>
              <rt>みさと</rt>
            </ruby>
          </a>
          <p style="font-weight: bold">タクシー呼び出し可能エリア:埼玉県三郷市</p>
          <hr>
          <div class="infomation" style="height: 100px; vertical-align: text-top; text-align: left">   
            <h3 style="font-size: 14px ;background-color: MistyRose">お知らせ</h3>
            <li> <router-link class="brand" to="recruit">タクシードライバー大募集</router-link></li>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'TopPage',
    methods: {
      gaEventTel() {
        this.$ga.event('tel', 'misato-taxi', 'call', 1)
      }
    }
}
</script>
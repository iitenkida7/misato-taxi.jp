<template>
 <div>
    <Header />
      <main role="main" class="container">
    <div class="row d-block">
      <h2>求人</h2>
      <hr />
      <h3>タクシードライバー大募集</h3>
      <p>全車カーナビ付（経験不問）</p>
      <img src="/image/taxi.jpg" />
      <div class="text-center" style="height:30px"></div>

      <h4>【仕事の概要】</h4>
      <ul>
        <li>地域密着のタクシー会社でのドライバー</li>
      </ul>

      <h4>【月給】</h4>
      <ul>
        <li>２５万円〜 月収３５万円以上可</li>
        <li>歩合制なので男・女に関係なく頑張り次第</li>
      </ul>
      <h4>【勤務時間】</h4>
      <ul>
        <li>７：００〜翌日２：００</li>
        <li>月１２日間勤務（月８日も可）</li>
        <li>休憩時間３時間(自宅での休憩も可)</li>
      </ul>
      <h4>【休日・休暇】</h4>
      <ul>
        <li>会社指定日、有給休暇有り</li>
      </ul>
      <h4>【対象となる方】</h4>
      <ul>
        <li>
          <span style="color:red ;font-weight: bold;">女性乗務員大歓迎</span>、定年後の方も大歓迎
        </li>
        <li>経験・学歴一切不問</li>
      </ul>
      <h4>【待遇】</h4>
      <ul>
        <li>
          ２種免許取得費用、当社全額負担
          <br />（取得までの間、1日１万円手当支給）
        </li>
        <li>社会保険完備</li>
        <li>制服貸与</li>
        <li>車通勤OK</li>
        <li>全車カーナビ付きで地理が苦手でもOK</li>
      </ul>
      <h4>【勤務地】</h4>
      <ul>
        <li>埼玉県三郷市</li>
      </ul>
      <hr />
      <div class="text-center" style="height:30px"></div>
      <div class="col-sm mx-auto rounded mx-auto d-block">
        <p class="text-center" style="color:red ; font-size:16px ;font-weight: bold;">
          やる気があればOK
          <br />親切丁寧にサポートします！まずはお電話を！
        </p>
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
      </div>
    </div>
  </main>
 </div>
</template>

<template>
  <div>
    <Header />
    <main role="main" class="pt-10 px-4 pb-12">
      <div class="max-w-3xl mx-auto">
        <!-- Header Section with Background Image -->
        <div class="mb-10 relative h-64 rounded-lg overflow-hidden shadow-lg" style="background-image: url('/image/taxi.jpg'); background-size: cover; background-position: center;">
          <!-- Overlay for text readability -->
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <!-- Text content with background box -->
          <div class="relative h-full flex flex-col justify-center items-center">
            <div class="bg-white bg-opacity-95 px-4 sm:px-8 py-6 rounded-lg max-w-xl">
              <h1 class="text-4xl font-bold mb-4 text-center text-gray-900">タクシードライバー大募集</h1>
              <p class="text-center text-lg text-gray-700 font-semibold mb-2">経験不問・全車カーナビ付き</p>
              <p class="text-center font-bold text-lg text-gray-900">女性乗務員大歓迎！</p>
            </div>
          </div>
        </div>

        <!-- Call to Action Banner -->
        <div class="bg-gray-800 text-white p-6 rounded-lg mb-10 text-center shadow-lg">
          <p class="text-lg font-bold mb-3">
            まずはお電話ください！
          </p>
          <a
            class="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-xl"
            href="tel:048-952-3310"
          >
            📞 048-952-3310
          </a>
        </div>

        <!-- Main Info Card -->
        <h2 class="text-3xl font-bold text-gray-900 mb-6">募集要項</h2>
        <div class="bg-white border border-gray-300 p-8 rounded-lg shadow mb-10">
          <!-- Salary & Hours -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-300 mb-8">
            <div class="bg-gray-50 p-4 rounded">
              <h3 class="text-lg font-bold text-gray-800 mb-2">💰 月給</h3>
              <p class="text-2xl font-bold text-gray-900 mb-2">25万円〜</p>
              <p class="text-sm text-gray-700">月収35万円以上可能</p>
              <p class="text-xs text-gray-600 mt-1">歩合制なので頑張り次第！</p>
            </div>
            <div class="bg-gray-50 p-4 rounded">
              <h3 class="text-lg font-bold text-gray-800 mb-2">🕐 勤務時間</h3>
              <p class="text-lg font-bold text-gray-900 mb-2">7:00 〜 翌日2:00</p>
              <p class="text-sm text-gray-700">月12日間勤務（月8日も可）</p>
              <p class="text-xs text-gray-600 mt-1">休憩3時間（自宅休憩も可）</p>
            </div>
          </div>

          <!-- Job Details -->
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-3">💼 仕事の概要</h3>
              <ul class="list-none space-y-2 ml-4">
                <li class="text-gray-700">✓ 地域密着のタクシー会社でのドライバー業務</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-3">🎁 待遇・サポート</h3>
              <ul class="list-none space-y-2 ml-4">
                <li class="text-gray-700">✓ ２種免許取得費用：当社全額負担</li>
                <li class="text-gray-700">✓ 免許取得まで：1日1万円手当支給</li>
                <li class="text-gray-700">✓ 社会保険完備</li>
                <li class="text-gray-700">✓ 制服貸与</li>
                <li class="text-gray-700">✓ 車通勤OK</li>
                <li class="text-gray-700">✓ 全車カーナビ付き（地理が苦手でもOK）</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-3">👥 対象となる方</h3>
              <ul class="list-none space-y-2 ml-4">
                <li class="text-gray-700 font-semibold">
                  ✓ <span class="text-red-600 font-bold">女性乗務員大歓迎</span>
                </li>
                <li class="text-gray-700">✓ 定年後の方も大歓迎</li>
                <li class="text-gray-700">✓ 経験・学歴一切不問</li>
              </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-3">📍 勤務地</h3>
                <p class="text-gray-700 ml-4">埼玉県三郷市</p>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-3">🏖️ 休日・休暇</h3>
                <ul class="list-none space-y-2 ml-4">
                  <li class="text-gray-700">✓ 会社指定日</li>
                  <li class="text-gray-700">✓ 有給休暇あり</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="mt-12 bg-gray-100 p-8 rounded-lg border-2 border-gray-300 text-center">
          <p class="text-2xl font-bold text-gray-900 mb-4">
            やる気があればOK！
          </p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            親切丁寧にサポートします<br />
            まずはお気軽にお電話ください
          </p>
          <div class="flex flex-col gap-3 items-center">
            <a
              class="inline-block rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 btn-tel text-lg transition shadow-lg"
              href="tel:048-952-3310"
            >
              📞 電話する
            </a>
            <p class="text-gray-700">
              <span class="font-bold">048-952-3310</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'タクシードライバー採用 | 三郷交通求人情報',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'タクシードライバー大募集中！埼玉県三郷市。女性乗務員大歓迎。経験不問。2種免許取得費用全額負担。月給25万円～。定年後の方も大歓迎。048-952-3310'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://misato-taxi.jp/recruit' }
      ]
    }
  }
};
</script>

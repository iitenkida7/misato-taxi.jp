<template>
  <div>
    <Header />
    <main role="main" class="pt-20 px-4 pb-8">
      <div class="max-w-2xl mx-auto">
        <div class="text-center">
          <!-- Emblem Image -->
          <img class="rounded-lg mx-auto mb-8 w-full max-w-xs shadow-lg" src="/image/emblem.png" alt="三郷交通"/>

          <!-- Header Section -->
          <div class="mb-10">
            <h1 class="text-3xl font-bold text-center text-gray-900 mb-2">三郷交通</h1>
            <p class="text-center text-lg text-gray-700">埼玉県三郷市でタクシーを呼ぶ</p>
          </div>

          <TelBottun />

          <div class="mt-8">
            <p class="text-center mt-8 mb-6">配車可能エリア: 埼玉県三郷市</p>
            <hr class="border-gray-300" />
            <div class="infomation text-left mt-6">
              <h3 class="font-bold mb-4 text-lg">お知らせ</h3>
              <ul class="list-disc ml-6">
                <li>
                  <NuxtLink class="text-blue-600 hover:text-blue-800 underline" to="recruit"
                    >タクシードライバー大募集</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: '三郷交通 | 埼玉県三郷市のタクシー配車サービス',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '埼玉県三郷市でタクシーをお探しなら三郷交通へ。三郷駅、三郷中央駅、新三郷、ららぽーと周辺など対応。24時間配車可能。048-952-3310'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://misato-taxi.jp/' }
      ]
    }
  }
};
</script>

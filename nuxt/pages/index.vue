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
            <p class="text-center text-lg text-gray-700 mb-2">埼玉県三郷市でタクシーを呼ぶ</p>
            <p class="text-center text-sm text-red-600 font-semibold">Uber Taxi はじめました！</p>
          </div>

          <TelBottun />

          <!-- Uber Banner (2段) -->
          <div class="mt-8 bg-black text-white p-4 rounded-lg shadow-lg">
            <a href="https://www.uber.com/jp/ja/ride/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center gap-1 hover:opacity-80 transition">
              <span class="font-bold text-sm">＼Uber Taxi サービス開始／</span>
              <span class="font-bold text-lg">Uber で予約する</span>
            </a>
          </div>

          <div class="mt-8">
            <p class="text-center mt-8 mb-6">配車可能エリア: 埼玉県三郷市</p>
            <hr class="border-gray-300" />
            <div class="text-center mt-6">
              <NuxtLink class="text-blue-600 hover:text-blue-800 underline font-bold text-lg" to="recruit">
                未経験OK！タクシードライバー募集中
              </NuxtLink>
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
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": "https://misato-taxi.jp"
              }
            ]
          })
        }
      ]
    }
  }
};
</script>

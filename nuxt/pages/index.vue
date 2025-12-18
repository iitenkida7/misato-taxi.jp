<template>
  <div>
    <Header />
    <main role="main" class="pt-20 px-4 pb-8">
      <div class="max-w-2xl mx-auto">
        <div class="text-center">
          <img class="rounded-lg mx-auto mb-0 w-full max-w-xs" src="/image/emblem.png" alt="三郷交通"/>
          <div class="mt-4 mb-8"><h1 class="text-base font-bold">三郷交通 / 埼玉県三郷市でタクシーを呼ぶ</h1></div>
          <TelBottun />
          <div class="mt-8">
            <p class="text-center mt-8 mb-6">配車可能エリア: 埼玉県三郷市</p>
            <hr class="border-gray-300" />
            <div class="infomation text-left mt-6">
              <h3 class="font-bold mb-4">お知らせ</h3>
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
  name: "index"
};
</script>

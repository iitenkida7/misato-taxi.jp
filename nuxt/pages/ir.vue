<template>
  <div>
    <Header />
    <main role="main" class="pt-20 px-4 pb-8">
      <div class="max-w-2xl mx-auto">
        <div class="text-center">
          <h1 class="text-2xl font-bold mb-6">会社概要</h1>
          <table class="w-full border-collapse border border-gray-300 mb-8">
            <tbody>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left w-24">会社名</td>
                <td class="border border-gray-300 px-4 py-2 text-left">有限会社三郷交通</td>
              </tr>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left">所在地</td>
                <td class="border border-gray-300 px-4 py-2 text-left">
                  〒341-0034<br />埼玉県三郷市新和３－１４７
                </td>
              </tr>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left">TEL</td>
                <td class="border border-gray-300 px-4 py-2 text-left">
                  <a href="tel:048-952-3310" class="text-blue-600 hover:text-blue-800 underline">048-952-3310</a>
                </td>
              </tr>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left">URL</td>
                <td class="border border-gray-300 px-4 py-2 text-left">http://misato-taxi.jp/</td>
              </tr>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left">事業内容</td>
                <td class="border border-gray-300 px-4 py-2 text-left">
                  一般乗用旅客自動車運送<br />(タクシー業)
                </td>
              </tr>
              <tr class="odd:bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-semibold text-left">主要営業地域</td>
                <td class="border border-gray-300 px-4 py-2 text-left">埼玉県三郷市</td>
              </tr>
            </tbody>
          </table>

          <h1 class="text-2xl font-bold mb-6">地図</h1>
          <div class="text-center mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12941.326056823415!2d139.88213668220905!3d35.816341174994726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189ac5bdaa1009%3A0x1c85dff09b156c64!2z44CSMzQxLTAwMzQg5Z-8546J55yM5LiJ6YO35biC5paw5ZKM77yT5LiB55uu77yR77yU77yXIO-8iOacie-8ieS4iemDt-S6pOmAmuacrOekvu-8iOWWtu-8iQ!5e0!3m2!1sja!2sjp!4v1411789149810"
              width="100%"
              height="300"
              class="max-w-md mx-auto block"
              style="border:0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <TelBottun />
      </div>
    </main>
  </div>
</template>

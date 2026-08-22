import { TelButton } from '../components/TelButton'

export const Home = () => (
  <main role="main" class="pt-20 px-4 pb-8">
    <div class="max-w-2xl mx-auto">
      <div class="text-center">
        {/* Emblem Image */}
        <img
          class="rounded-lg mx-auto mb-8 w-full max-w-xs shadow-lg"
          src="/image/emblem.png"
          alt="三郷交通"
        />

        {/* Header Section */}
        <div class="mb-10">
          <h1 class="text-3xl font-bold text-center text-gray-900 mb-2">三郷交通</h1>
          <p class="text-center text-lg text-gray-700 mb-2">埼玉県三郷市でタクシーを呼ぶ</p>
          <p class="text-center text-sm text-red-600 font-semibold">
            Uber Taxi はじめました！
          </p>
        </div>

        <TelButton />

        {/* Uber Banner */}
        <div class="mt-8 bg-black text-white p-4 rounded-lg shadow-lg">
          <a
            href="https://www.uber.com/jp/ja/ride/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center justify-center gap-1 hover:opacity-80 transition"
          >
            <span class="font-bold text-sm">＼Uber Taxi サービス開始／</span>
            <span class="font-bold text-lg">Uberでタクシーを呼ぶ</span>
          </a>
        </div>

        <div class="mt-8">
          <p class="text-center mt-8 mb-6">配車可能エリア: 埼玉県三郷市</p>
          <hr class="border-gray-300" />
          <div class="text-center mt-6">
            <a
              class="text-blue-600 hover:text-blue-800 underline font-bold text-lg"
              href="/recruit"
            >
              未経験OK！タクシードライバー募集中
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
)

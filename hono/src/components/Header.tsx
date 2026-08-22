export const Header = () => (
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a class="flex items-center text-white font-bold text-lg" href="/">
          <span class="text-xs mr-1">有限会社</span>三郷交通
        </a>
        <div class="hidden md:flex space-x-6 items-center">
          <a class="text-white hover:bg-gray-700 px-3 py-2 rounded" href="/">
            トップページ
          </a>
          <a class="text-white hover:bg-gray-700 px-3 py-2 rounded" href="/ir">
            会社概要
          </a>
          <a class="text-white hover:bg-gray-700 px-3 py-2 rounded" href="/recruit">
            求人
          </a>
          <a
            class="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-lg transition"
            href="tel:048-952-3310"
          >
            タクシーを呼ぶ（電話）
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          id="menu-toggle"
          type="button"
          class="md:hidden text-white"
          aria-label="メニュー"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div id="mobile-menu" class="hidden md:hidden pb-4 space-y-2">
        <a class="block text-white hover:bg-gray-700 px-3 py-2 rounded" href="/">
          トップページ
        </a>
        <a class="block text-white hover:bg-gray-700 px-3 py-2 rounded" href="/ir">
          会社概要
        </a>
        <a class="block text-white hover:bg-gray-700 px-3 py-2 rounded" href="/recruit">
          求人
        </a>
        <a
          class="block bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-lg transition"
          href="tel:048-952-3310"
        >
          タクシーを呼ぶ（電話）
        </a>
      </div>
    </div>
  </nav>
)

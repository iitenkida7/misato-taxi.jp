<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink class="flex items-center text-white font-bold text-lg" to="/">
          <span class="text-xs mr-1">有限会社</span>三郷交通
        </NuxtLink>
        <div class="hidden md:flex space-x-6">
          <a class="btn-tel text-white hover:bg-gray-700 px-3 py-2 rounded" href="tel:048-952-3310">タクシーを呼ぶ（電話）</a>
          <NuxtLink class="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/">トップページ</NuxtLink>
          <NuxtLink class="text-white hover:bg-gray-700 px-3 py-2 rounded" to="ir">会社概要</NuxtLink>
          <NuxtLink class="text-white hover:bg-gray-700 px-3 py-2 rounded" to="recruit">求人</NuxtLink>
        </div>
        <!-- Mobile menu button -->
        <button class="md:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <a class="block btn-tel text-white hover:bg-gray-700 px-3 py-2 rounded" href="tel:048-952-3310">タクシーを呼ぶ（電話）</a>
        <NuxtLink class="block text-white hover:bg-gray-700 px-3 py-2 rounded" to="/">トップページ</NuxtLink>
        <NuxtLink class="block text-white hover:bg-gray-700 px-3 py-2 rounded" to="ir">会社概要</NuxtLink>
        <NuxtLink class="block text-white hover:bg-gray-700 px-3 py-2 rounded" to="recruit">求人</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    }
  }
}
</script>

<template>
  <div class="flex flex-col h-screen justify-between dark:bg-gray-900">
    <div class="dark:bg-gray-900">
      <Header />
    </div>

    <div class="mb-auto dark:bg-gray-900">
      <Nuxt />
    </div>

    <div class="dark:bg-gray-900">
      <Footer />
    </div>
  </div>
</template>

<style>
.wrapper {
  @apply max-w-screen-xl mx-auto;
}

.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}

.flex-center {
  @apply flex justify-center items-center;
}

#waifu-toggle {
  background-color: #2563eb !important;
  padding: 10px !important;
  font-size: 13px !important;
}

#waifu-toggle.waifu-toggle-active {
  margin-left: -20px !important;
}
</style>

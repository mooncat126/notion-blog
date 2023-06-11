<template>
  <div class="wrapper mx-auto px-5 dark:bg-gray-900">
    <hr class="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto" />
    <div class="md:py-5">
      <div
        class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"
      >
        <div class="logo flex items-center">
          <p class="text-sm text-gray-700 dark:text-gray-200 mx-1">
            © {{ currentYear }} {{ $config.devName }} Built with ♡
          </p>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

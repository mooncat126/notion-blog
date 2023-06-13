<template>
  <div class="mt-10 mb-10">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-lg">{{ title }}</h2>
    </div>

    <div class="wrapper-small my-5">
      <span class="font-semibold mr-5">All Tags:</span>
      <span
        v-for="tag in tagList"
        :key="tag"
        class="font-semibold text-gray-600 bg-opacity-25 dark:bg-opacity-40 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-2 py-1 mr-2"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    tagList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

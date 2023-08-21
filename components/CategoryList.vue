<template>
  <div class="mb-5">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-lg">{{ title }}</h2>
    </div>

    <div id="allCategories" class="wrapper-small my-5">
      <span
        class="font-semibold mr-5 mb-2 inline-block dark:text-white cursor-pointer"
        @click="showAllPosts"
        >All Categories:</span
      >
      <br />
      <span
        v-for="category in categoryList"
        :key="category"
        @click="filterPostsByCategory(category)"
        class="font-semibold mb-1 inline-block text-gray-600 bg-opacity-25 dark:bg-opacity-30 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-2 py-1 mr-2 cursor-pointer"
      >
        <span>{{ category }} </span>
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
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    filterPostsByCategory(category) {
      this.$emit("postsFiltered", category);
    },
    showAllPosts() {
      this.$emit("showAllPosts");
    },
  },
};
</script>

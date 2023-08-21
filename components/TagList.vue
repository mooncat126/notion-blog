<template>
  <div class="mt-0 mb-10">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-lg">{{ title }}</h2>
    </div>

    <div id="allTags" class="wrapper-small my-5">
      <span
        class="font-semibold mr-5 mb-2 inline-block dark:text-white cursor-pointer"
        @click="showAllPosts"
        >All Tags:
        <span
          class="font-semibold mr-5 mb-2 inline-block dark:text-primary cursor-pointer"
          @click="toggleExpand"
        >
          ( {{ isExpanded ? "Collapse ▲" : "Expand ▼" }} )</span
        ></span
      >
      <br />
      <transition-group name="fade" tag="div" class="flex flex-wrap">
        <div v-for="tag in displayedTags" :key="tag">
          <span
            @click="filterPostsByTag(tag)"
            class="font-semibold mb-1 inline-block text-gray-600 bg-opacity-25 dark:bg-opacity-10 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-2 py-1 mr-2"
          >
            <a href="#">#{{ tag }}</a>
          </span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
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
  computed: {
    displayedTags() {
      return this.isExpanded ? this.tagList : this.tagList.slice(0, 10);
    },
  },
  methods: {
    filterPostsByTag(tag) {
      this.$emit("postsFiltered", tag);
    },
    showAllPosts() {
      this.$emit("showAllPosts");
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

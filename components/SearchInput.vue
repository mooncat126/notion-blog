<template>
  <div>
    <div id="search" ref="searchBox">
      <label
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <IconSearch />
        </div>
        <input
          type="search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="searchQuery"
          placeholder="Search Something..."
          @focus="cleanResults()"
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="handleSearch(searchQuery)"
        >
          Search
        </button>
      </div>
      <div
        class="absolute bg-gray-800 bg-opacity-80 text-white"
        v-if="isSearchActive && searchResults.length"
      >
        <a
          v-for="result in searchResults"
          :key="result.id"
          :href="`/posts/${result.slug}`"
          class="block px-4 py-2 hover:bg-gray-800"
          v-html="result.title"
        />
      </div>
      <div
        v-else-if="isSearchActive"
        class="absolute bg-gray-800 bg-opacity-80 text-white px-4 py-2"
      >
        {{ noResultText }}
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import _ from "lodash";

export default {
  data() {
    return {
      searchPostsLists: [],
      searchResults: [],
      searchQuery: "",
      noResultText: "",
      isSearchActive: false,
    };
  },
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    window.addEventListener("click", this.handleOutsideClick);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("click", this.handleOutsideClick);
    });
  },
  methods: {
    searchPosts(query) {
      const searchPostsLists = _.cloneDeep(this.posts);
      const fuse = new Fuse(searchPostsLists, {
        includeScore: true,
        includeMatches: true,
        keys: ["title", "content"],
      });

      const results = fuse.search(query);

      // 遍历每个结果
      return results.map((result) => {
        // 获取每个匹配的详细信息
        const matches = result.matches;
        const item = result.item;

        matches.forEach((match) => {
          const text = item[match.key];
          let result = "";
          let start = 0;

          // 遍历每个匹配的部分
          match.indices.forEach(([x, y]) => {
            // 在匹配的部分周围添加 HTML 标签来高亮显示
            result +=
              text.substring(start, x) +
              "<mark>" +
              text.substring(x, y + 1) +
              "</mark>";
            start = y + 1;
          });

          // 添加剩余的文本
          result += text.substring(start);

          item[match.key] = result;
        });

        return item;
      });
    },
    async handleSearch(query) {
      this.searchResults = [];
      this.isSearchActive = true;
      const results = await this.searchPosts(query);

      if (results.length === 0) {
        this.noResultText = "Oops...什么都没有找到...";
        return;
      }
      this.searchResults = results;
    },
    cleanResults() {
      this.searchResults = [];
      this.noResultText = "";
      this.isSearchActive = false;
    },
    handleOutsideClick(e) {
      if (!this.isSearchActive) return;
      if (this.$refs.searchBox.contains(e.target)) return;

      this.cleanResults();
    },
  },
};
</script>
å

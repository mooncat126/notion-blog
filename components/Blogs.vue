<template>
  <div class="mt-20">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-xl">{{ title }}</h2>
    </div>

    <div class="wrapper-small my-5">
      <div
        v-for="post of paginatedPosts"
        :key="post.slug"
        class="project-card flex flex-col md:flex-row mt-10"
      >
        <div class="img md:w-1/3 lg:w-1/2 md:pr-4 lg:pr-8 mb-4">
          <nuxt-link :to="`/posts/${post.slug}`">
            <div class="relative group rounded-xl overflow-hidden h-img w-full">
              <img
                :alt="post.title"
                :src="`${post.thumbnail[0].url}`"
                class="object-cover object-center h-full w-full"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300 flex items-center justify-center"
              >
                <p
                  class="text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                >
                  {{ post.alt }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="flex flex-col justify-between md:w-2/3 lg:w-1/2">
          <div class="txt px-0 md:px-5 lg:px-0">
            <nuxt-link :to="`/posts/${post.slug}`">
              <h2
                class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 lg:min-w-[500px]"
              >
                {{ post.title }}
              </h2>
            </nuxt-link>
            <p class="font-semibold text-gray-600 dark:text-gray-300 text-sm">
              {{ formatDate(post.created_at) }}
            </p>
            <div class="flex flex-col justify-between max-w-lg mx-auto"></div>
            <span
              v-for="tag of post.tags"
              :key="tag"
              class="font-semibold text-gray-600 bg-opacity-25 dark:bg-opacity-40 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-2 py-1 mr-2 inline-block mt-1.5"
            >
              #{{ tag }}
            </span>
            <p class="text-base text-gray-700 dark:text-gray-200 my-4">
              {{ post.description }}
            </p>
            <nuxt-link
              :to="`/posts/${post.slug}`"
              class="text-base font-semibold text-gray-700 dark:text-gray-200 my-3 hover:text-primary"
            >
              Read more >
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <TagList :tagList="tagList" />

    <nav class="wrapper-small my-5">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <button
            class="block px-4 py-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="prevPage()"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li v-for="page in visiblePageNumbers" :key="page">
          <button
            class="px-4 py-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary"
            :class="{
              'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-primary':
                currentPage === page,
            }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            class="block px-4 py-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary"
            @click="nextPage()"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Blogs",
    },
    posts: {
      type: Array,
      default() {
        return [];
      },
    },
    tagList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentPage: 1,
      postsPerPage: 5,
      maxVisiblePages: 10,
    };
  },
  computed: {
    // Calculate the total number of pages
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    // Return only the posts for the current page
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.posts.slice(start, end);
    },
    visiblePageNumbers() {
      let start = this.currentPage - Math.floor(this.maxVisiblePages / 2);
      let end = this.currentPage + Math.floor(this.maxVisiblePages / 2);

      // Ensure start is not less than 1
      if (start < 1) {
        end += 1 - start;
        start = 1;
      }

      // Ensure end is not more than totalPages
      if (end > this.totalPages) {
        start -= end - this.totalPages;
        end = this.totalPages;
      }

      // Ensure start is not less than 1 after adjusting the end
      if (start < 1) {
        start = 1;
      }

      return Array.from(
        { length: end - start + 1 },
        (_, index) => start + index
      );
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<template>
  <div class="mt-20">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-xl">{{ title }}</h2>
    </div>

    <div class="wrapper-small my-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.html_url"
          class="block bg-gray-50 dark:bg-gray-800 p-6 shadow rounded-lg mt-2 lg:mt-0"
          rel="github_content"
          target="_blank"
        >
          <div>
            <div class="flex flex-row items-center">
              <IconRepo class="h-4 w-4 mr-1 dark:text-white" />
              <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100">
                {{ project.name }}
              </h3>
            </div>
            <p class="my-2 text-base text-gray-500 dark:text-gray-400">
              {{ project.description }}
            </p>
            <ul
              class="flex items-center space-x-4 text-black dark:text-gray-200"
            >
              <li class="inline-flex items-center">
                <span
                  class="block rounded-full bg-green-500 w-3 h-3 mr-1"
                ></span>
                <span>{{ project.language }}</span>
              </li>
            </ul>
          </div>
        </a>
        <div class="flex items-center justify-end">
          <a
            id="moreGithub"
            class="bg-black w-full md:w-auto flex items-center justify-center px-10 md:px-24 py-3 shadow-md hover:bg-gray-800 rounded-lg text-white"
            :href="$config.devGithubLink"
            rel="noreferrer"
            target="_blank"
          >
            <IconGithub class="text-white h-6 w-6 mr-3" />
            See More Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Blogs",
    },
    projects: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

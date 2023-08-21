<template>
  <div class="px-2 sm:px-10">
    <SearchInput :posts="posts" />

    <div class="h-60 mt-5">
      <Hero />
    </div>

    <Blogs :posts="posts" title="Blogs" :show-detail="false" />
    <Projects :projects="projects" title="My Github Projects" />
    <Contact title="Contact Me" />
  </div>
</template>

<script>
export default {
  async asyncData({
    $axios,
    $notion,
    $config: { githubUsername, notionTableId },
  }) {
    const projects = await $axios
      .get(
        "https://api.github.com/search/repositories?q=user:" +
          githubUsername +
          "&sort=language&per_page=3"
      )
      .catch((errors) => {
        console.log(errors);
      });

    const pageTable = await $notion.getPageTable(notionTableId);
    const posts = pageTable
      .filter((page) => page.public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return { posts, projects: projects.data.items };
  },
};
</script>

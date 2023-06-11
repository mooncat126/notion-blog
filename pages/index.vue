<template>
  <div class="wrapper-small md:px-10">
    <div class="h-60 mt-5">
      <Hero />
    </div>

    <Blogs :posts="posts" title="Featured Blogs" />
    <Projects :projects="projects" title="My Github Projects" />
    <TagList :tagList="tagList" title="All Tags" />
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
        // console.log(errors)
      });
    const pageTable = await $notion.getPageTable(notionTableId);
    console.log(projects.data.items);
    const posts = pageTable
      .filter((page) => page.public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const tagSet = new Set();

    pageTable.forEach((page) => {
      page.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    });

    const tagList = Array.from(tagSet);
    return { posts, projects: projects.data.items, tagList };
  },
};
</script>

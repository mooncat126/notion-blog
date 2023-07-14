<template>
  <Blogs :posts="posts" title="Blogs" :tag-list="tagList" :show-detail="true" />
</template>

<script>
export default {
  async asyncData({ $notion, params, error, $config: { notionTableId } }) {
    const pageTable = await $notion.getPageTable(notionTableId);
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
    return { posts, tagList };
  },
  head: {
    title: process.env.GITHUB_USERNAME + "'s Blog",
    meta: [
      {
        hid: "description",
        name: "description",
        content: process.env.DEV_DESCRIPTION,
      },
    ],
  },
};
</script>

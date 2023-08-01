<template>
  <Blogs
    :posts="posts"
    title="Blogs"
    :tag-list="tagList"
    :category-list="categoryList"
    :show-detail="true"
  />
</template>

<script>
export default {
  async asyncData({ $notion, $config: { notionTableId } }) {
    const pageTable = await $notion.getPageTable(notionTableId);

    const posts = pageTable
      .filter((page) => page.public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const tagSet = new Set();
    const categorySet = new Set();

    pageTable.forEach((page) => {
      page.tags.forEach((tag) => {
        tagSet.add(tag);
      });

      page.categories.forEach((category) => {
        categorySet.add(category);
      });
    });

    const tagList = Array.from(tagSet);
    const categoryList = Array.from(categorySet);

    return { tagList, categoryList, posts };
  },
};
</script>

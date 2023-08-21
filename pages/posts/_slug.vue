<script>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-shell-session";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-javascript";
import Gitalk from "../gitalk.vue";

export default {
  components: {
    Gitalk,
  },
  async asyncData({
    $notion,
    params,
    error,
    $config: {
      notionTableId,
      githubUsername,
      commentClientId,
      commentClientSecrets,
      commentRepo,
    },
  }) {
    const pageTable = await $notion.getPageTable(notionTableId);
    const page = pageTable.find(
      (item) => item?.public && item?.slug === params?.slug
    );
    const blockMap = await $notion.getPageBlocks(page?.id);
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: blockMap.error });
    }

    return {
      blockMap,
      page,
      githubUsername,
      commentClientId,
      commentClientSecrets,
      commentRepo,
    };
  },
  data() {
    return {
      pageLinkOptions: { component: "NuxtLink", href: "to" },
    };
  },
  head() {
    const post = this.page;
    const title = post?.title;
    const description = post?.description || process.env.DEV_DESCRIPTION;
    const image = post?.thumbnail[0]?.url || null;
    const atl = post?.atl || "";
    const tags = post?.tags || title;
    const categories = post?.categories || title;
    const href = process.env.BASE_URL + `/posts/${post?.slug}`;
    const meta = this.$prepareMeta(
      {
        title,
        description,
        image,
        atl,
        keywords: `${tags}, ${categories}`,
        url: href,
      },
      [{ name: "article:published-time", content: post?.created_at || null }]
    );
    return {
      post,
      title,
      link: [{ rel: "canonical", href }],
      meta,
    };
  },
};
</script>

<style>
@import "vue-notion/src/styles.css";
.notion-title,
.notion-text,
.notion-list,
.notion-callout-text,
p,
h1,
h2,
h3,
h4,
span {
  @apply dark:text-white;
}
</style>

<template>
  <div class="wrapper-small">
    <NotionRenderer
      :block-map="blockMap"
      :page-link-options="pageLinkOptions"
      full-page
      prism
    />
    <Gitalk
      :post-id="page?.slug"
      :post-title="page?.title"
      :github-username="githubUsername"
      :comment-client-id="commentClientId"
      :comment-client-secrets="commentClientSecrets"
      :comment-repo="commentRepo"
    />
  </div>
</template>

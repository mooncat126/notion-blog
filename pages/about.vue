<template>
  <div>
    <img
      class="w-full h-full object-cover object-center"
      src="../assets/img/about_banner.jpg"
      alt="About banner"
    />
    <div class="wrapper-small">
      <NotionRenderer :block-map="blockMap" full-page prism />
      <br />
      <div class="flex justify-center">
        <img class="w-1/2 md:w-1/4" src="../assets/img/bmc_qr.png" alt="bmc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $notion, $config: { notionAboutPageId } }) {
    const blockMap = await $notion.getPageBlocks(notionAboutPageId);
    return { blockMap };
  },
  head: {
    title: "About",
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
.notion-link {
  @apply dark:hover:bg-red-500;
}
</style>

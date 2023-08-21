<template>
  <div class="wrapper-small dark:text-gray-200">
    <hr />
    <div class="dark:text-gray-200" id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  name: "Gitalk",
  props: {
    postId: {
      type: String,
      default: "",
    },
    postTitle: {
      type: String,
      default: "",
    },
    githubUsername: {
      type: String,
      default: "",
    },
    commentClientId: {
      type: String,
      default: "",
    },
    commentClientSecrets: {
      type: String,
      default: "",
    },
    commentRepo: {
      type: String,
      default: "",
    },
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: this.commentClientId,
      clientSecret: this.commentClientSecrets,
      repo: this.commentRepo,
      owner: this.githubUsername,
      admin: [this.githubUsername],
      id: this.postId,
      title: this.postTitle,
      distractionFreeMode: false,
    });

    gitalk.render("gitalk-container");
  },
};
</script>
<style>
.gt-btn-text {
  color: #333 !important;
}
.gt-action span {
  color: #6190e8 !important;
}
.gt-svg {
  @apply dark:text-white;
}
.gt-header-textarea {
  color: #333 !important;
}
.markdown-body > * {
  color: #333 !important;
}
</style>

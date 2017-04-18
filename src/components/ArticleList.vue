<template>
  <ul>
    <li v-for="article in articleList">
      <router-link :to="`/article/${article.key}`">{{ article.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Array,
      default: null,
    },
  },
};
</script>

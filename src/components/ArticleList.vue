<template>
  <ul>
    <li v-for="article in articleList">
      {{ article.title }}
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

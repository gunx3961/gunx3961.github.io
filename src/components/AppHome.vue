<template>
  <div>
    <h1>Article List</h1>
    <p>In development.
      <br>正在开发中。
      <br>ただいま工事中です。
      <br>
    </p>
    <hud-button label="NORMAL"></hud-button>
    <hud-button label="MINI" mini></hud-button>
    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import HudButton from './HudButton';
import ArticleList from './ArticleList';
import xhr from '../utils/xhr';

export default {
  components: {
    HudButton,
    ArticleList,
  },
  data() {
    return {
      articleList: null,
    };
  },
  mounted() {
    xhr.get('articles')
      .then((res) => {
        this.articleList = res.data;
      }, (err) => {
        console.error(err);
      });
  },
};
</script>

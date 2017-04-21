<template>
  <div class="app-home">
    <progress-bar :pending="loading"></progress-bar>
    <div>
      <transition name="slide-fade">
        <article-list v-if="articleList" :articleList="articleList"></article-list>
      </transition>
      <p>In development.
        <br>正在开发中。
        <br>ただいま工事中です。
        <br>
      </p>
    </div>
  </div>
</template>

<script>
import HudButton from './HudButton';
import ArticleList from './ArticleList';
import xhr from '../utils/xhr';
import ProgressBar from './ProgressBar';

export default {
  components: {
    HudButton,
    ArticleList,
    ProgressBar,
  },
  data() {
    return {
      articleList: null,
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.loading = true;
      this.error = null;
      xhr.get('articles')
        .then((res) => {
          this.loading = false;
          this.articleList = res.data;
        }, (err) => {
          this.error = err;
        });
    },
  },
};
</script>

<style lang="scss">
.app-home {
  overflow-x: hidden;
  position: relative;
}
</style>

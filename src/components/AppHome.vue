<template>
  <div class="app-home">
    <progress-bar :pending="loading"></progress-bar>
    <div>
      <transition name="slide-fade">
        <article-list v-if="articleList" :articleList="articleList"></article-list>
      </transition>

    </div>
  </div>
</template>

<script>
import xhr from '../utils/xhr';
import ProgressBar from './ProgressBar';
import ArticleList from './ArticleList';

export default {
  components: {
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
  min-height: .1rem;
  overflow-x: hidden;
  position: relative;
}
</style>

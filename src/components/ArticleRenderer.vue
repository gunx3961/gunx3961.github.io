<template>
  <div class="article-container">
    <progress-bar :pending="loading"></progress-bar>

    <span v-if="error">Error!</span>
    <transition name="slide-fade">
      <article @click="loading = !loading" class="article" v-if="article" v-html="article"></article>
    </transition>
  </div>
</template>

<script>
import xhr from '../utils/xhr';
import renderMarkdown from '../utils/renderer';
import ProgressBar from './ProgressBar';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      loading: false,
      error: null,
      article: null,
      intervalId: null,
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      this.loading = true;
      xhr.get(`article/${this.$route.params.key}`)
        .then(res => renderMarkdown(res.data.content), (err) => {
          this.error = err;
        })
        .then((html) => {
          this.loading = false;
          this.article = html;
        }, (err) => {
          this.error = err;
          console.error('Parsing error: ', this.error);
        });
    },
  },

};
</script>

<style lang="scss">
@import '~styles/vars';

.article-container {
  position: relative;
}

.article {
  overflow-x: hidden;
  line-height: 1.3;

  p code {
    color: #ce9178;
  }

  pre {
    @include code-zone;
  }
}
</style>

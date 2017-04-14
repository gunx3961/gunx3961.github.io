<template>
  <div class="article-container">
    <!--<progress-bar :loading="loading"></progress-bar>-->

    <span v-if="error">Error!</span>
    <article class="article" v-if="article" v-html="article"></article>
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
      loading: true,
      error: null,
      article: null,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      xhr.get(`article/${this.$route.params.key}`)
        .then(res => renderMarkdown(res.data.content), (err) => {
          this.error = err;
        })
        .then((html) => {
          this.article = html;
          this.loading = false;
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

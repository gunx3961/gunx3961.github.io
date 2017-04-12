<template>
  <div>
    <span v-if="loading">Loading...</span>
    <span v-if="error">Error!</span>
    <article class="article" v-if="article" v-html="article"></article>
  </div>
</template>

<script>
import xhr from '../utils/xhr';
import renderMarkdown from '../utils/renderer';

export default {
  data() {
    return {
      loading: false,
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
        }, (err) => {
          this.error = err;
        });
    },
  },

};
</script>

<style lang="scss">
@import '~styles/vars';

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

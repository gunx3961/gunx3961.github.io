<template>
  <div class="article-container">
    <progress-bar :progress="progress"></progress-bar>

    <span v-if="error">Error!</span>
    <transition name="slide-fade">
      <article class="article" v-if="article" v-html="article"></article>
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
      progress: 0,
      intervalId: null,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      this.fetchStart();
      xhr.get(`article/${this.$route.params.key}`)
        .then(res => renderMarkdown(res.data.content), (err) => {
          this.error = err;
        })
        .then((html) => {
          this.fetchEnd();
          this.article = html;
        }, (err) => {
          this.error = err;
          console.error('Parsing error: ', this.error);
        });
    },
    fetchStart() {
      this.loading = true;
      this.progress = 15;
      this.intervalId = setInterval(() => {
        this.progress = this.progress < 65 ?
          this.progress + 10 + (Math.random() * 10) :
          this.progress;
      }, 0.2e3);
    },
    fetchEnd() {
      this.loading = false;
      this.progress = 100;
      clearInterval(this.intervalId);
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

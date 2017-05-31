<template>
  <div class="article-container">
    <progress-bar :pending="loading"></progress-bar>

    <span v-if="error">Error!</span>
    <transition name="slide-fade">
      <div>
        <div v-if="article" class="meta">
          <tag-group :tags="data.tags"></tag-group>
          <timestamp :time="data.createdAt"></timestamp>
        </div>
        <article class="article" v-if="article" v-html="article"></article>
      </div>
    </transition>
  </div>
</template>

<script>
import xhr from '../utils/xhr';
import renderMarkdown from '../utils/renderer';
import ProgressBar from './ProgressBar';
import TagGroup from './TagGroup';
import Timestamp from './Timestamp';

export default {
  components: {
    ProgressBar,
    TagGroup,
    Timestamp,
  },
  data() {
    return {
      loading: false,
      error: null,
      article: null,
      data: null,
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
        .then((res) => {
          this.data = res.data;
          return renderMarkdown(res.data.content);
        }, (err) => {
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

.meta {
  display: flex;
  padding-top: .2rem;
  justify-content: space-between;
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

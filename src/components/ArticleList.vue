<template>
  <ul class="article-list">
    <li class="article-item" v-for="article in articleList">
      <section>
        <h1>{{ article.title }}</h1>
        <hud-button
          mini
          label="READ MORE >"
          :onClick="() => { $router.push({ path: `/article/${article.key}`}) }"
        ></hud-button>
      </section>
    </li>
  </ul>
</template>

<script>
import HudButton from './HudButton';

export default {
  components: {
    HudButton,
  },
  props: {
    articleList: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import '~styles/vars';

$quotation-width: .02rem;
$quotation-horizontal-length: .16rem;

$quotation-border-line: solid $quotation-width $positive-color;

.article-list {
  margin: 0;
  padding: .16rem 0;

  .article-item {
    position: relative;
    display: block;
    margin: .16rem 0;
    padding: 0 $quotation-horizontal-length;

    &:hover {
      background-color: $intermediate-color;
    }

    &::before, &::after {
      content: "";
      display: block;
      height: 100%;
      width: $quotation-horizontal-length;
      position: absolute;
      top: 0;
      border-width: 0;
      border-color: $intermediate-color;
    }
    &::before {
      left: 0;
      border-top: $quotation-border-line;
      border-left: $quotation-border-line;
    }
    &::after {
      right: 0;
      border-right: $quotation-border-line;
      border-bottom: $quotation-border-line;
    }


    section {

      h1 {
        $line-height: .36rem;

        margin: 0;
        padding: $line-height / 4 0;
        padding-left: $line-height / 2 + $quotation-horizontal-length - $quotation-width;
        line-height: $line-height;
        position: relative;

        &::before {
          content: "";
          display: block;
          background-color: $positive-color;
          height: $line-height / 2;
          width: $line-height / 2;
          position: absolute;
          top: $line-height / 2;
          left: 0;
        }
      }
    }
  }
}
</style>

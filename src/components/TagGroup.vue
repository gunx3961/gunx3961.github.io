<template>
  <ul class="tag-group">
    <li v-for="tag in tags" class="tag">{{ tag }}</li>
  </ul>
</template>

<script>

export default {
  props: {
    tags: {
      type: Array,
      default() { return null; },
    },
  },
};
</script>

<style lang="scss">
@import '~styles/vars';

@mixin angled-edge($color, $height: 0.2rem) {
  background: linear-gradient(60deg, transparent $height / 2, $color 0) left;
}

$tag-height: .2rem;
.tag-group {
  padding: 0;
  margin: 0;
  height: $tag-height;


  .tag {
    display: inline-block;
    position: relative;
    background: $intermediate-color;
    @include angled-edge($intermediate-color, $tag-height);
    color: $positive-color;
    font-size: .12rem;
    height: $tag-height;
    line-height: $tag-height;
    margin: .04rem;
    margin-top: 0;
    padding:0 .08rem 0 .16rem;
    cursor: pointer;

    &:hover {
      background: $positive-color;      
      @include angled-edge($positive-color, $tag-height);
      color: $negative-color;
    }
  }
}

</style>

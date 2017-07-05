<template>
  <a :href="url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'about:blank',
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  opacity: .5;
  transition: opacity .3s;

  &:hover {
    opacity: 1;
    color: initial !important;
    background-color: transparent !important;
  }
}
</style>


<template>
  <button
    :class="{ mini }"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() { return 'OK'; },
    },
    mini: {
      type: Boolean,
      default() { return false; },
    },
    onClick: {
      type: Function,
      default() { return () => {}; },
    },
  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/vars';
button {
  position: relative;
  background: transparent;
  color: $positive-color;
  margin: .08rem .03rem;
  border: none;
  border-top: .03rem solid $positive-color;
  border-bottom: .03rem solid $positive-color;
  padding: .1rem .24rem .1rem .4rem;
  line-height: .16rem;
  font-weight: bold;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    background: $positive-color;
    width: .14rem;
    height: .14rem;
    left: .13rem;
    bottom: .11rem;
  }

  &:focus {
    background: $intermediate-color;
  }

  &:hover {
    background: $positive-color;
    color: $negative-color;

    &::before {
      background: $negative-color;
    }
  }

  &:active {
    background: transparent;
    color: $positive-color;

    &::before {
      background: $positive-color;
    }
  }

  &.mini {
    border-top: .02rem solid $positive-color;
    border-bottom: .02rem solid $positive-color;
    padding: .06rem .16rem .06rem .26rem;
    line-height: .16rem;
    font-weight: normal;

    &::before {
      width: .1rem;
      height: .1rem;
      left: .08rem;
      bottom: .09rem;
    }
  }
}
</style>

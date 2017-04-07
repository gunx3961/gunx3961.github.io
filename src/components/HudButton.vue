<template>
  <button :class="{ mini }">
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
  margin: 0 3px;
  border: none;
  border-top: 3px solid $positive-color;
  border-bottom: 3px solid $positive-color;
  padding: 10px 24px 10px 40px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    background: $positive-color;
    width: 14px;
    height: 14px;
    left: 13px;
    bottom: 11px;
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
    border-top: 2px solid $positive-color;
    border-bottom: 2px solid $positive-color;
    padding: 6px 16px 6px 26px;
    line-height: 16px;
    font-weight: normal;

    &::before {
      width: 10px;
      height: 10px;
      left: 8px;
      bottom: 9px;
    }
  }
}
</style>

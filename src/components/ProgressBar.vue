<template>
  <div class="progress" :class="{ pending: progress < 100 }">
    <div
      class="progress-bar"
      :style="{
        width: `${progress}%`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default() { return 0; },
    },
  },
};
</script>

<style lang="scss">
@import '~styles/vars';

@keyframes breathe {
  from {
    opacity: 1;
  }
  to {
    opacity: .3;
  }
}

.progress {
  position: absolute;
  width: 100%;
  height: .1rem;
  padding: 2px;

  &.pending {
    border: 1px solid $positive-color;
    animation: breathe .2s linear infinite alternate;
  }

  .progress-bar {
    height: 100%;
    background-color: $positive-color;
    transition: width .3s;
  }
}



</style>

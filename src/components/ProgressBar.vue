<template>
  <div class="progress">
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
    loading: {
      type: Boolean,
      default() { return true; },
    },
  },
  data() {
    return { progress: 0 };
  },
  buforeUpdate() {
    if (this.loading === false) {
      this.progress = 100;
    }
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
  border: 1px solid $positive-color;
  padding: 2px;

  animation: breathe .2s linear infinite alternate;

  .progress-bar {
    height: 100%;
    background-color: $positive-color;
    transition: width .15s;
  }
}



</style>

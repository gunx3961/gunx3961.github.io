<template>
  <div class="progress" :class="{ pending }">
    <div v
      class="progress-bar"
      :style="{
        width: `${progress}%`,
        transition,
      }"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pending: {
      type: Boolean,
      default() { return false; },
    },
  },
  data() {
    return {
      progress: 0,
      transition: 'width .3s',
    };
  },
  watch: {
    pending(val, oldVal) {
      if (val && !oldVal) {
        this.fetchStart();
      } else if (!val && oldVal) {
        this.fetchEnd();
      }
    },
  },
  methods: {
    fetchStart() {
      if (this.progress !== 0) {
        this.transition = 'none';
        this.progress = 0;
      }
      this.progress = 15;
      this.intervalId = setInterval(() => {
        if (this.transition === 'none') {
          this.transition = 'width .3s';
        }
        this.progress = this.progress < 65 ?
          this.progress + 10 + (Math.random() * 10) :
          this.progress;
      }, 0.2e3);
    },
    fetchEnd() {
      if (this.transition === 'none') {
        this.transition = 'width .3s';
      }
      this.progress = 100;
      clearInterval(this.intervalId);
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
    // transition: width .3s;
  }
}
</style>

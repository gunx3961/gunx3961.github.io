<template>
  <div class="timestamp">
    <icon-clock height="15"></icon-clock>
    <span>{{ localeTime }}</span>
  </div>
</template>

<script>
import IconClock from './icons/Clock';

export default {
  components: {
    IconClock,
  },
  props: {
    time: {
      type: Number,
      default: null,
    },
  },
  computed: {
    localeTime() {
      return new Date(this.time).toLocaleString();
    },
  },
};
</script>

<style lang="scss">
@import '~styles/vars';

.timestamp {
  color: rgba($positive-color, .7);
  padding: 0;
  margin: 0;
  line-height: .2rem;
  font-size: .14rem;
  font-style: italic;
}
</style>


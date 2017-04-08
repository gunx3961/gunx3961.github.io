<template>
  <div class="wrapper">
    <div class="container">
      <article>
        <h1>Article</h1>
        <p>In development.
          <br>正在开发中。
          <br>ただいま工事中です。</p>
      </article>
      <hud-button label="NORMAL"></hud-button>
      <hud-button label="MINI" mini></hud-button>
    </div>
  </div>
</template>

<script>
import HudButton from './HudButton';

export default {
  components: {
    HudButton,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/vars';

.wrapper {
  min-height: 100vh;
  padding: 2rem;
  padding-left: $header-width + 2rem;
  color: $positive-color;
  background-color: $negative-color;
  background-image:
    linear-gradient(135deg, rgba($positive-color, .15) 1px, transparent 0),
    linear-gradient(rgba($positive-color, .1) 1px, transparent 0),
    linear-gradient(90deg, rgba($positive-color, .1) 1px, transparent 0),
    linear-gradient(90deg, rgba($positive-color, .1) 2px, transparent 0);
  background-size:
    16px 16px,
    128px 128px,
    128px 128px,
    512px 512px;
  background-position: 23px 42px;

  .container {
    @include side-line();
  }
}
</style>

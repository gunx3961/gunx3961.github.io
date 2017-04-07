<template>
  <div id="app">
    <h1>gunx.info</h1>
    <p>In development.
      <br>正在开发中。
      <br>ただいま工事中です。</p>
    <hud-button label="NORMAL"></hud-button>
    <hud-button label="MINI" mini></hud-button>
  </div>
</template>

<script>
import HudButton from './components/HudButton';

export default {
  name: 'app',
  components: {
    HudButton,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
@import '~styles/vars';

body {
  margin: 0 5%;
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
} 

*::selection {
  color: $negative-color;
  background-color: white;
}

*:focus {
  outline: none;
}

</style>

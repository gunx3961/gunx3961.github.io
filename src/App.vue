<template>
  <div id="app">
    <h1>gunx.info</h1>
    <p>In development.
      <br>正在开发中。
      <br>ただいま工事中です。</p>
    <button>NORMAL</button>
    <button class="mini">MINI</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
$font-stack: 'Avenir', Helvetica, Arial, sans-serif;
// based on two high-contrast colors
$positive-color: #d3d3d3;
$negative-color: #1f1f1f;
$intermediate-color: rgba($positive-color, .15);

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
}
button:focus {
  background: $intermediate-color;
}
button.mini {
  border-top: 2px solid $positive-color;
  border-bottom: 2px solid $positive-color;
  padding: 6px 16px 6px 26px;
  line-height: 16px;
  font-weight: normal;
}
button::before {
  content: '';
  position: absolute;
  background: $positive-color;
  width: 14px;
  height: 14px;
  left: 13px;
  bottom: 11px;
}
button.mini::before {
  width: 10px;
  height: 10px;
  left: 8px;
  bottom: 9px;
}
button:hover {
  background: $positive-color;
  color: $negative-color;
}
button:hover::before {
  background: $negative-color;
}

button:active {
  background: transparent;
  color: $positive-color;
}
button:active::before {
  background: $positive-color;
}

</style>

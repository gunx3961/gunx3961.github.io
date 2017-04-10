<template>
  <div id="content-container">
    <article>
      <h1>Article</h1>
      <p>In development.
        <br>正在开发中。
        <br>ただいま工事中です。</p>
    </article>
    <hud-button label="NORMAL"></hud-button>
    <hud-button label="MINI" mini></hud-button>
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

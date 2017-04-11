<template>
  <div>
    <h1>Article List</h1>
    <p>In development.
      <br>正在开发中。
      <br>ただいま工事中です。
      <br><a href="blog.gunx.info">My blog</a>
    </p>
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

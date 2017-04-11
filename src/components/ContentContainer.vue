<template>
  <div id="content-container">      
    <router-view></router-view>
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

<template>
  <div id="app">
    <app-header></app-header>
    <content-container></content-container>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import ContentContainer from './components/ContentContainer';

export default {
  name: 'app',
  components: {
    AppHeader,
    ContentContainer,
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
@import '~styles/global';

</style>

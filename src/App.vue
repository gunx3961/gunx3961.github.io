<template>
  <div id="app">
    <app-header></app-header>
    <content-container></content-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import ContentContainer from './components/ContentContainer';
import AppFooter from './components/AppFooter';

export default {
  name: 'app',
  components: {
    AppHeader,
    ContentContainer,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import '~styles/vars';
@import '~styles/global';

</style>

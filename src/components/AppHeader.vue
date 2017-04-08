<template>
  <header>
    <my-profile></my-profile>
  </header>
</template>

<script>
import MyProfile from './MyProfile';

export default {
  components: {
    MyProfile,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/vars';

header {
  float: left;
  color: $negative-color;
  background-color: $positive-color;
  height: 100vh;
  width: $header-width;
  padding: 2rem;

  background-image:
    linear-gradient(135deg, rgba($negative-color, .15) 1px, transparent 0),
    linear-gradient(rgba($negative-color, .1) 1px, transparent 0),
    linear-gradient(90deg, rgba($negative-color, .1) 1px, transparent 0),
    linear-gradient(90deg, rgba($negative-color, .1) 2px, transparent 0);
  background-size:
    16px 16px,
    128px 128px,
    128px 128px,
    512px 512px;
  background-position: 23px 42px;
}

</style>

<template>
  <div id="profile">
    <div id="logo" @click="$router.push({ path: '/' })"></div>
    <div id="contact-me">
      <p>
        <i>誰かのために泡になりたい</i>
      </p>
      <div class="link-group">
        <icon-link url="https://github.com/gunx3961">
          <icon-mark-github height="36"></icon-mark-github>
        </icon-link>
        <icon-link url="mailto:gunx@foxmail.com">
          <icon-mail height="36"></icon-mail>
        </icon-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from './IconLink';
import IconMail from './icons/Mail';
import IconMarkGithub from './icons/MarkGithub';

export default {
  components: {
    IconLink,
    IconMail,
    IconMarkGithub,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/vars';

@mixin box-shadow($shadows...) {
  box-shadow: $shadows;
}

@mixin single-color-pixelize($matrix, $color, $pixel-size: .08rem) {
  $shadows: ();
  $max-length: 1;

  @for $i from 1 through length($matrix) {
    $row: nth($matrix, $i);
    $str-length: str-length($row);

    @for $j from 1 through $str-length {
      $marker: str-slice($row, $j, $j);
      @if $marker == "█" {
        $shadows: append($shadows, $j * $pixel-size $i * $pixel-size $color, comma);
      }
    }

    @if $str-length > $max-length {
      $max-length: $str-length;
    }
  }

  position: relative;
  width: $max-length * $pixel-size;
  height: length($matrix) * $pixel-size;

  &::after {
    content: "";
    position: absolute;
    left: -$pixel-size;
    top: -$pixel-size;
    width: $pixel-size;
    height: $pixel-size;
    display: block;
    @include box-shadow($shadows);
  }
}

$logo-matrix: (
" ███  █   █ █   █ █   █",
"█     █   █ ██  █  █ █",
"█  ██ █   █ █ █ █   █",
"█   █ █  ██ █  ██  █ █",
"█████ ███ █ █   █ █   █ █",
"",
"         █  ███  ███  ███",
"           █  █ █    █  █",
"         █ █  █ ████ █  █",
"         █ █  █ █    ████",
);

#logo {
  @include single-color-pixelize($logo-matrix, $negative-color, .08rem);

  cursor: pointer;
}

#profile {
  @include side-line($negative-color);

  #contact-me {
    opacity: .6;
    padding: .08rem 0;
    
    .link-group>* {
      margin-right: .12rem;
    }
  }
}
</style>

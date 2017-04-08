<template>
<div id="profile">  
  <div id="logo"></div>
</div>
</template>

<style lang="scss" scoped>
@import '~styles/vars';

@mixin box-shadow($shadows...) {
  box-shadow: $shadows;
}

@mixin single-color-pixelize($matrix, $color, $pixel-size: 8px) {
  $shadows: ();
  $max-length: 1;

  @for $i from 1 through length($matrix) {
    $row: nth($matrix, $i);
    $str-length: str-length($row);

    @for $j from 1 through $str-length {
      $marker: str-slice($row, $j, $j);
      @if $marker == "x" {
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
"xxxxx x   x x   x x   x   ",
"x     x   x xx  x  x x    ",
"x  xx x   x x x x   x     ",
"x   x x   x x  xx  x x    ",
"xxxxx xxxxx x   x x   x x ",
"",
"         x x  x xxxx xxxx ",
"         x xx x x    x  x ",
"         x x xx xxxx x  x ",
"         x x  x x    xxxx "
);

#logo {
  @include single-color-pixelize($logo-matrix, $negative-color, 8px);
}

#profile {
  @include side-line($negative-color);
}
</style>

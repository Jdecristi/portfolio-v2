<div class="boxes-component">
  <img class="box box-1" src="assets/boxes/box-1.png" alt="Box 1">
  <img class="box box-2"src="assets/boxes/box-2.png" alt="Box 2">
</div>

<style lang="scss" global>
  .boxes-component {
    position: relative;

    @keyframes oscillate {
      0% {
        -ms-transform: rotate(-10deg);
        -moz-transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        -o-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }

      50% {
        -ms-transform: rotate(10deg);
        -moz-transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        -o-transform: rotate(10deg);
        transform: rotate(10deg);
      }

      100% {
        -ms-transform: rotate(-10deg);
        -moz-transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        -o-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
    }

    .box {
      position: absolute;
      animation: oscillate 7s ease-in-out infinite;
    }

    .box-1 {
      bottom: 0;
      right: 0;
    }

    .box-2 {
      top: 0;
      left: 0;
    }
  }
</style>
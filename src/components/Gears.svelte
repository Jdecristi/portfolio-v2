<script lang="ts">
  import Image from "@src/components/Image.svelte";
</script>

<div class="gears-component">
  <div class="gear gear-1">
    <Image src="assets/gear.svg" alt="Gear 1" />
  </div>
  <div class="gear gear-2">
    <Image src="assets/gear.svg" alt="Gear 2" />
  </div>
  <div class="gear gear-3">
    <Image src="assets/gear.svg" alt="Gear 3" />
  </div>
</div>

<style lang="scss" global>
  .gears-component {
    position: relative;
    width: 90px;
    height: 70px;

    @keyframes clockwise {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes counter-clockwise {
      from {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
      to {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }

    .gear {
      position: absolute;
      transition: transform 5ms linear;
    }

    .gear-1 {
      width: 60px;
      top: 5px;
      left: 0;
      animation: clockwise 10s linear infinite;
    }

    .gear-2 {
      width: 30px;
      top: 0;
      right: 0;
      animation: counter-clockwise 10s linear infinite;
    }

    .gear-3 {
      width: 30px;
      bottom: 0;
      right: 0;
      animation: counter-clockwise 10s linear infinite;
    }
  }
</style>

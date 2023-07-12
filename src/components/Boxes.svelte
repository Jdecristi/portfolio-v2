<script lang="ts">
  import Image from "@src/components/Image.svelte";
</script>

<div class="boxes-component">
  <div class="box box-1">
    <Image src="assets/boxes/box-1.png" alt="Box 1" />
  </div>
  <div class="box box-2">
    <Image src="assets/boxes/box-2.png" alt="Box 2" />
  </div>
</div>

<style lang="scss" global>
  .boxes-component {
    position: relative;

    @keyframes oscillate {
      0% {
        -ms-transform: rotate(-20deg);
        -moz-transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        -o-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }

      50% {
        -ms-transform: rotate(20deg);
        -moz-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        -o-transform: rotate(20deg);
        transform: rotate(20deg);
      }

      100% {
        -ms-transform: rotate(-20deg);
        -moz-transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        -o-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }
    }

    .box-1 {
      width: 75px;
      aspect-ratio: 1.2 / 1;
      bottom: 0;
      right: 0;
      position: absolute;
      animation: oscillate 7s ease-in-out infinite;
    }

    .box-2 {
      width: 25px;
      aspect-ratio: 1.1 / 1;
      top: 0;
      left: 0;
      position: absolute;
      animation: oscillate 8s ease-in-out infinite;
    }
  }
</style>

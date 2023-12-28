<script lang="ts">
  import Boxes from "@src/components/Boxes.svelte";
  import Gears from "@src/components/Gears.svelte";
  import Experiences from "@src/components/Experiences.svelte";
  import Image from "@src/components/Image.svelte";
</script>

<section class="exerience">
  <div class="blob">
    <Image src="assets/blobs/blob-1.svg" alt="blob" />
  </div>
  <div class="layer-zero">
    <div class="boxes-container">
      <Boxes />
    </div>

    <div class="gears-container">
      <Gears />
    </div>
  </div>
  <div class="layer-one">
    <Experiences />
    <h1>Experience</h1>
  </div>
</section>

<style lang="scss" global>
  .exerience {
    min-height: 75vh;
    position: relative;

    .blob {
      position: absolute;
      bottom: 0%;
      right: 0;
      width: 40vw;
      z-index: -1;

      @media (max-width: 1200px) {
        width: 60vw;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
    .layer-zero {
      width: 100%;
      height: 100%;

      .boxes-container {
        position: absolute;
        top: 10rem;
        left: 10rem;
      }

      .gears-container {
        position: absolute;
        top: 5rem;
        right: 5rem;
        @media (max-width: 900px) {
          top: 85%;
        }
      }
    }

    .layer-one {
      padding: 15rem 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10vw;

      @media (max-width: 1200px) {
        padding: 15rem 5%;
      }

      @media (max-width: 900px) {
        padding: 15rem 5%;
        flex-direction: column-reverse;
        gap: 1rem;
      }
    }
  }
</style>

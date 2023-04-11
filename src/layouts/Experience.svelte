<script lang="ts">
  import Boxes from "@src/components/Boxes.svelte";
  import Gears from "@src/components/Gears.svelte";
  import Paper from "@src/components/Paper.svelte";
</script>

<section class="exerience">
  <img class="blob" src="assets/blobs/blob-1.svg" alt="blob" />
  <div class="layer-zero">
    <div class="boxes-container">
      <Boxes />
    </div>

    <div class="gears-container">
      <Gears />
    </div>
  </div>
  <div class="layer-one">
    <Paper>
      <div class="paper-content">
        <div class="paper-content-header">
          <img class="thumbstopper-logo" src="assets/thumbstopper.svg" alt="Thumbstopper Logo" />
          <h4>Thumbstopper</h4>
        </div>
        <span>Jun, 2021 - Jul, 2022</span>
        <p>
          During my time as a Frontend Engineer, I restructured and redesigned the frontend to improve workflow and
          reduce user errors. By adding form validation, I also bolstered security. Utilizing Vue.js, Scss, and
          Bootstrap, I developed visually stunning landing pages for clients, while simultaneously debugging and adding
          new features to the production codebase.
        </p>
      </div>
    </Paper>
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
      position: absolute;
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
      }
    }

    .layer-one {
      padding: 15rem 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10vw;
      z-index: 1;

      @media (max-width: 1200px) {
        padding: 15rem 5%;
      }

      @media (max-width: 900px) {
        padding: 15rem 5%;
        flex-direction: column-reverse;
        gap: 1rem;
      }

      .paper-content {
        padding: 2rem;
        max-width: 35vw;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 1200px) {
          max-width: 50vw;
        }

        @media (max-width: 900px) {
          max-width: 60vw;
        }

        @media (max-width: 600px) {
          max-width: 80vw;
        }

        .paper-content-header {
          display: flex;
          align-items: center;
          gap: 2rem;

          @media (max-width: 600px) {
            gap: 1rem;
          }

          .thumbstopper-logo {
            width: 50px;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import Boxes from "@src/components/Boxes.svelte";
  import Gears from "@src/components/Gears.svelte";
  import Paper from "@src/components/Paper.svelte";
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
    <Paper>
      <div class="paper-content">
        <div class="paper-content-header">
          <div class="thumbstopper-logo">
            <Image src="assets/thumbstopper.svg" alt="Thumbstopper Logo" />
          </div>
          <h4>Thumbstopper</h4>
        </div>
        <span>Jun, 2021 - Jul, 2022</span>
        <p>
          At Thumbstopper, I successfully integrated back-end services and server-side logic to create a
          high-performance platform. I also ensured smooth front-end integration and seamless integration of user-facing
          elements. Overcoming architectural challenges, I implemented the MVC design patterns and utilized PHP web
          frameworks to optimize the system's performance. Additionally, I employed front-end technologies like Vue.js
          and object-oriented PHP programming to enhance the user experience. Furthermore, I efficiently managed and
          accessed SQL databases to store and retrieve data.
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

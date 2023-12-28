<script lang="ts">
  import Paper from "@src/components/Paper.svelte";
  import Paralax from "@src/components/Paralax.svelte";
  import TextBubble from "@src/components/TextBubble.svelte";
  import Image from "@src/components/Image.svelte";
  import ShowerThoughts from "@src/constants/shower-thoughts.json";

  $: currentThought = ShowerThoughts[Math.floor(Math.random() * ShowerThoughts.length)];
</script>

<section class="about-me">
  <div class="image-area">
    <div class="text-bubble-container">
      <Paralax depth={-2}>
        <TextBubble width="150px">{currentThought}</TextBubble>
      </Paralax>
    </div>
    <div class="profile-img">
      <Image src="/assets/profile.png" min="/assets/profile-min.png" alt="Profile" />
    </div>
  </div>
  <div class="content-area">
    <h1>About Me</h1>
    <Paper>
      <div class="paper-contents">
        <p>
          I'm a full stack engineer who loves to build immersive web applications. I'm obsessed with solving problems, 
          tinkering with new technology, and adding skills by breaking down barriers.
        </p>
      </div>
    </Paper>
    <div class="curly-arrow-container">
      <Paralax>
        <div class="curly-arrow">
          <Image src="/assets/curly-arrow.svg" alt="Profile Arrow" />
        </div>
      </Paralax>
    </div>
  </div>
</section>

<style lang="scss" global>
  .about-me {
    height: 75vh;
    padding: 10rem 10%;
    background-color: $purple;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    border-bottom: 5px solid $black;

    @media (max-width: 900px) {
      flex-direction: column;
      height: auto;
      gap: 5vh;
      padding: 10rem 5%;
    }

    .image-area {
      position: relative;

      .text-bubble-container {
        position: absolute;
        top: -15%;
        left: -30%;

        @media (max-width: 1200px) {
          top: -40px;
          left: -25%;
        }
        @media (max-width: 900px) {
          top: -15%;
          left: -50px;
        }

        @media (max-width: 600px) {
          top: -30%;
          left: -40%;
        }
      }

      .profile-img {
        stroke: 3px solid $black;
        width: 50vw;
        max-width: 300px;

        @media (max-width: 1200px) {
          width: 30vw;
        }
        @media (max-width: 900px) {
          width: 40vw;
        }
        @media (max-width: 600px) {
          width: 50vw;
        }
      }
    }

    .content-area {
      position: relative;
      @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .paper-contents {
        padding: 2rem;
        width: 100vw;
        max-width: 500px;

        @media (max-width: 1200px) {
          max-width: 400px;
        }
        @media (max-width: 900px) {
          width: 70vw;
          max-width: 500px;
        }

        @media (max-width: 600px) {
          width: 70vw;
        }
      }
      .curly-arrow-container {
        position: absolute;
        top: 25px;
        left: 100%;
        width: 75px;

        @media (max-width: 1200px) {
          width: 50px;
        }
        @media (max-width: 900px) {
          width: 50px;
        }

        @media (max-width: 600px) {
          top: -10px;
          left: 95%;
        }

        .curly-arrow {
          width: 100%;
        }
      }
    }
  }
</style>

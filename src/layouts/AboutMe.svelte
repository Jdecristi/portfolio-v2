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
          I transitioned from construction to coding after discovering my passion for building websites, starting with a
          local Korean BBQ restaurant. After starting at Thumbstopper working with Vue.js, I expanded my skills with
          React, Typescript, and other tools. I later joined Formation for formal training under senior developers from
          top-tier companies like Google and Meta. Now, I'm eager to bring my skills to a new team.
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
        width: 20vw;

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
        max-width: 30vw;

        @media (max-width: 1200px) {
          max-width: 50vw;
        }
        @media (max-width: 900px) {
          max-width: 60vw;
        }

        @media (max-width: 600px) {
          max-width: 70vw;
        }
      }
      .curly-arrow-container {
        position: absolute;
        top: 25px;
        left: 100%;
        width: 75px;

        @media (max-width: 900px) {
          width: 50px;
        }

        @media (max-width: 600px) {
          top: 0;
          right: 10px;
        }

        .curly-arrow {
          width: 100%;
        }
      }
    }
  }
</style>

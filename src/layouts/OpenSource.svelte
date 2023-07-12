<script lang="ts">
  import Image from "@src/components/Image.svelte";
</script>

<section class="open-source">
  <div class="blob">
    <Image src="assets/blobs/blob-2.svg" alt="blob" />
  </div>
  <h1>Open Source</h1>
  <p>
    The concept of open source has played a significant role in my professional journey. In my view, software should
    ideally be open source, but managing large-scale projects often presents challenges. I am currently exploring
    opportunities to participate in new projects, and I invite you to peruse my GitHub profile for further information.
  </p>
  <a href="https://github.com/jdecristi" target="_blank">
    <button class="large">Github</button>
  </a>
</section>

<style lang="scss" global>
  .open-source {
    text-align: center;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: relative;

    p {
      font-size: $F200;
      width: 60vw;
      max-width: 800px;

      @media (max-width: 900px) {
        width: 80vw;
      }
    }

    .blob {
      position: absolute;
      top: 50%;
      left: 0;
      width: 90vw;
      max-width: 1200px;
      transform: translateY(-50%);
      z-index: -1;

      @media (max-width: 900px) {
        display: none;
      }
    }
  }
</style>

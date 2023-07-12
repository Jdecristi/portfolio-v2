<script lang="ts">
  export let src: string;
  export let min: string = "";
  export let alt: string;

  let img: HTMLImageElement;
  let div: HTMLDivElement;

  const loaded = () => {
    img.classList.add("loaded");
    setTimeout(() => {
      div.style.backgroundImage = "";
      div.classList.remove("blur");
    }, 0);
  };

  $: {
    if (img) {
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    }
  }
</script>

<div bind:this={div} class="img-container blur" style={min ? `background-image: url(${min})` : ""}>
  <img bind:this={img} {src} {alt} loading={"lazy"} />
</div>

<style lang="scss" global>
  .img-container {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;

    &.blur {
      filter: blur(100px);
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
      opacity: 0;
      transition: opacity 100ms ease-in-out;

      &.loaded {
        opacity: 1;
      }
    }
  }
</style>

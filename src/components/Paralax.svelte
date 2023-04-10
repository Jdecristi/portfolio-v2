<script lang="ts">
  export let depth: number = 1;

  let item: HTMLDivElement;

  const mouseHandler = (event: MouseEvent) => {
    const [x, y]= [event.clientX, event.clientY];
    
    const intensity = depth / 200;

    item.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  }

</script>

<svelte:window on:mousemove={mouseHandler}/>
<div class="paralax-container">
  <div bind:this={item} class="paralax-item">
    <slot />
  </div>
</div>

<style lang="scss" global>
  .paralax-container {
    position: relative;

    .paralax-item {
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 10ms ease-in-out;
      font-size: $F-100;
    }
  }
</style>
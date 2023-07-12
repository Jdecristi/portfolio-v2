<script lang="ts">
  import Image from "@src/components/Image.svelte";

  export let width = "100px";
</script>

<div class="text-bubble-container" style={`width: ${width}`}>
  <div class="text-bubble-image">
    <Image src="/assets/text-bubble/thought-bubble.png" alt="Thought Bubble" />
  </div>
  <div class="text-bubble-content">
    <slot />
  </div>
</div>

<style lang="scss" global>
  .text-bubble-container {
    position: relative;

    .text-bubble-image {
      width: 100%;
    }

    .text-bubble-content {
      position: absolute;
      top: 40%;
      left: 40%;
      transform: translate(-40%, -30%);
      text-align: center;
    }
  }
</style>

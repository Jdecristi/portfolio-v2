<script lang="ts">
  export let className = "";
</script>

<div class={"paper " + className}>
  <slot />
</div>

<style lang="scss" global>
  .paper {
    background-color: $white;
    border: 3px solid $black;
    border-radius: 10px;
    box-shadow: 5px 5px 0px $black;
  }
</style>
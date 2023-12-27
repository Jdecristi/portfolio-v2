<script lang="ts">
  import {onDestroy} from 'svelte'

  export let isOpen: boolean;
  export let content: string;


  const trimmed = content.trim();
  const contentArray = trimmed.split(/\s+/);
  const max = contentArray.length;
  const min = 25;
  
  let exerpt: string[] = contentArray.splice(0, min);
  let interval: ReturnType<typeof setInterval>;

  const increment = () => {
    if (exerpt.length >= max) clearInterval(interval);
    else if (exerpt.length >= max - 20) exerpt = trimmed.split(/\s+/).splice(0, exerpt.length + 1);
    else exerpt = trimmed.split(/\s+/).splice(0, exerpt.length + 5);
  }

  const decrement = () => {
    if (exerpt.length <= min + 1) clearInterval(interval);
    else if (exerpt.length <= min + 20) exerpt = exerpt.splice(0, exerpt.length - 1);
    else exerpt = exerpt.splice(0, exerpt.length - 5);
  }


  onDestroy(() => {
    clearInterval(interval);
  })

  $: {
    interval = setInterval(() => {
      if (isOpen) increment();
      else decrement();

    }, 7)
  }
</script>

{exerpt.join(" ") + (exerpt.length < max ? "..." : "")}

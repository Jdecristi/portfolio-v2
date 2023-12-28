<script lang="ts">
  import Exerpt from "@src/components/Exerpt.svelte";
  import Image from "@src/components/Image.svelte";
  import Paper from "@src/components/Paper.svelte";

  import Experiences from "@src/constants/experiences.json"

  let contentIsShort = false;
  let visibleIndex = 0;

  const togglContentIsShort = () => {
    contentIsShort = !contentIsShort;
  }
</script>

<div class="experiences-container">
  {#each Experiences as {name, date, logo, description}, index }
    <Paper className={`paper-content ${index === visibleIndex ? "visible": ""}`}>
      <div class="paper-header">
        <div class="paper-title">
          <div class="logo">
            <Image src={logo.url} min={logo.minUrl} alt={logo.alt} />
          </div>
          <h4>{name}</h4>
        </div>
        <span class="date">{date}</span>
      </div>
      <p>
        <Exerpt 
        isOpen={contentIsShort} 
        content={description}
        />
      </p>
      <div class="button">
        <button class="link" on:click={togglContentIsShort}>{`Show ${contentIsShort ? "Less" : "More"}`}</button>
      </div>
    </Paper>
  {/each}
  <div class="buttons-container">
    {#each Experiences as _, index }
      <button style={index === visibleIndex ? "background-color: #000": ""} on:click={() => visibleIndex = index} />
    {/each}
  </div>
</div>

<style lang="scss" global>
  .experiences-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .paper-content {
      width: 600px;
      padding: 2rem;
      flex-direction: column;
      gap: 1rem;
      display: none;

      @media (max-width: 1200px) {
        width: 500px;
      }

      @media (max-width: 900px) {
        width: 500px;
      }

      @media (max-width: 600px) {
        width: 90vw;
      }

      &.visible {
        display: flex;
      }
   
      .paper-title {
        display: flex;
        align-items: center;
        gap: 2rem;
        
        .logo {
          width: 50px;
          border-radius: 10px;
        }
      }
      
      .button {
        display: flex;
        justify-content: end;
      }
    }

    .buttons-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      
      button {
        padding: 0;
        border: 0;
        width: 10px;
        aspect-ratio: 1 / 1;

        &:hover {
          background-color: #ccc;
          transform: none;
          box-shadow: none;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
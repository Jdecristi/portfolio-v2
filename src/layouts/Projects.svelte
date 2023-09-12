<script lang="ts">
  import Paper from "@src/components/Paper.svelte";
  import Image from "@src/components/Image.svelte";
  import ProjectData from "@src/constants/projects.json";
</script>

<section class="projects">
  <div class="projects-container">
    {#each ProjectData as project}
      <Paper>
        <div class="paper-content">
          <div class="thumbnail">
            <Image
              src="assets/project-thumbnails/{project.imgPath}.png"
              min="assets/project-thumbnails/{project.imgPath}-min.png"
              alt={`${project.name} Thumbnail`}
            />
          </div>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <div class="buttons-container">
            <a href="https://github.com/jdecristi/{project.slug}" target="_blank">
              <button class="secondary">See Source Code</button>
            </a>
            {#if project.developmentPath}
              <a href="https://{project.developmentPath}.jdecristi.com" target="_blank">
                <button class="primary">Take me to the Site</button>
              </a>
            {/if}
          </div>
        </div>
      </Paper>
    {/each}
  </div>

  <div class="text-bubble">
    <Image src="assets/text-bubble/text-bubble.static.png" alt="Text Bubble" />
  </div>
</section>

<style lang="scss" global>
  .projects {
    border-bottom: 5px solid $black;
    border-top: 5px solid $black;
    position: relative;

    .projects-container {
      width: 100%;
      padding: 5rem 10vw;
      background-color: $yellow;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10vw;
      overflow-x: scroll;

      .paper-content {
        height: 550px;
        width: 40vw;
        max-width: 400px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 900px) {
          width: 80vw;
        }

        .thumbnail {
          max-width: 100%;
        }
        .buttons-container {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .text-bubble {
      position: absolute;
      top: 0;
      left: 1rem;
      width: 50vw;
      max-width: 350px;
      transform: translateY(-49%);

      @media (max-width: 600px) {
        width: 60%;
      }
    }
  }
</style>

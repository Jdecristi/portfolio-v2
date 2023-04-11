<script lang="ts">
  import SkillData from "@src/constants/skills.json";
</script>

<section class="skills">
  <div class="skills-container">
    {#each SkillData as skill}
      <img class="skills-img" src={`assets/skills/${skill.img}`} alt={skill.name} />
    {/each}
    {#each SkillData as skill}
      <img class="skills-img" src={`assets/skills/${skill.img}`} alt={skill.name} />
    {/each}
  </div>
</section>

<style lang="scss" global>
  .skills {
    background-color: $black;
    display: flex;

    @keyframes slide {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .skills-container {
      display: flex;
      animation: slide 20s linear infinite;

      .skills-img {
        margin: 2rem;
        height: 50px;
      }

      @media (min-width: 901px) {
        &:hover {
          animation-play-state: paused;
        }
      }
    }
  }
</style>

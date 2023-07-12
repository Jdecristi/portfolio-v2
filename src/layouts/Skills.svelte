<script lang="ts">
  import Image from "@src/components/Image.svelte";
  import SkillData from "@src/constants/skills.json";
</script>

<section class="skills">
  <div class="skills-container">
    {#each SkillData as skill}
      <div class="skills-img">
        <Image src={`assets/skills/${skill.img}`} alt={skill.name} />
      </div>
    {/each}
    {#each SkillData as skill}
      <div class="skills-img">
        <Image src={`assets/skills/${skill.img}`} alt={skill.name} />
      </div>
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
        width: max-content;
        max-width: 220px;
      }
    }
  }
</style>

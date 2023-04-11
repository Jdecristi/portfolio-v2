<section class="contact">
  <h1>Contact</h1>
  <span
    >You can contact me through <a href="mailto:joshua.decristi@gmail.com" target="blank">Email</a> or, direct message
    me through
    <a href="https://www.linkedin.com/in/joshua-decristi/" target="blank">Linkedin</a>.</span
  >
</section>

<style lang="scss" global>
  .contact {
    height: 75vh;
    padding: 10rem 10%;
    background-color: $teal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-top: 5px solid $black;
    color: $black;

    h1 {
      margin-bottom: 5rem;
    }

    span {
      text-align: center;
      color: $black;

      a {
        color: $white;
        font-size: $F100;
        transition: all 100ms ease-in-out;

        &:hover {
          border-bottom: 2px solid $white;
        }
      }
    }
  }
</style>

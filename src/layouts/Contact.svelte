<section class="contact">
  <h1>Contact</h1>
  <span
    >You can contact me through <a href="mailto:joshua.decristi@gmail.com" target="blank">Email</a> or direct message
    me through
    <a href="https://www.linkedin.com/in/joshua-decristi/" target="blank">
      Linkedin
    </a>.</span
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
        padding: 0 0 0.5rem 0;
        color: $white;
        display: inline-block;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $white;
          transform-origin: bottom left;
          transition: transform 0.25s ease-out;
        }

        &:hover {
          transform: none;
          box-shadow: none;

          &::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
</style>

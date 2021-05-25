<template>
  <section class="s-intro">
    <div class="intro-container" data-color="#f3f2f7">
      <div class="intro-column">
        <p class="paragraph-m">
          Front End Engineer and Designer in Tokyo. Monotas by day, creative
          developer by night - turning designs into beautiful digital
          experiences.
        </p>
        <p class="paragraph-r">
          Email
          <br />
          pham.levi.9@gmail.com
        </p>
      </div>
      <div class="intro-column">
        <p class="paragraph-r">
          I have the privilege of being both web designer and engineer at
          Monotas, going from prototype to code and bridging the gap between
          these seemingly far-apart roles.
        </p>
        <p class="paragraph-r">
          Tools
          <br />
          Figma, Adobe Photoshop, Adobe Illustrator
        </p>
        <p class="paragraph-r">
          Tech
          <br />
          Nuxt.js, React, Redux, GSAP, TailwindCSS, Storybook
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-intro {
  padding-bottom: 8.33vw;
  .intro-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 0 8.33vw;
  }
  .intro-column {
    position: relative;
    flex-basis: 25vw;
    &:first-child {
      margin: 0 8.33vw 0 16.66vw;
    }
    &:nth-child(2) {
      .paragraph-r {
        margin-bottom: 2.083vw;
        &:last-of-type {
            margin-bottom: 0;
        }
      }
    }
  }
  .paragraph-r {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <section class="s-intro">
    <div class="intro-container" data-color="#f3f2f7">
      <div class="intro-column">
        <p class="paragraph-m">
          {{ $t("intro.headline") }}
        </p>
        <p class="paragraph-r">
          <span class="font-italic">Email</span>
          <br />
          pham.levi.9@gmail.com
        </p>
      </div>
      <div class="intro-column">
        <p class="paragraph-r">
          {{ $t("intro.subHeadline") }}
        </p>
        <p class="paragraph-r">
          <span class="font-italic">Tools</span>
          <br />
          Figma, Adobe Photoshop, Adobe Illustrator
        </p>
        <p class="paragraph-r">
          <span class="font-italic">Tech</span>
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
        &:first-child {
          margin-bottom: 4.33vw;
        }
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

.font-italic {
  font-style: italic;
}
@media only screen and (max-width: 768px) {
  .s-intro {
    padding-bottom: 16.66vw;
    .intro-container {
      display: block;
    }
    .intro-column {
      &:first-child {
        margin: 0;
        flex-basis: unset;
      }
    }
    .paragraph-r{
      &:first-child {
        margin-bottom: 0;
      }
      &:last-of-type {
        margin-bottom: 8vw;
      }
    }
  }
}
</style>

<template>
  <section class="s-about">
    <div class="about-container" data-color="#f3f2f7">
      <div class="about-head">
        <h1 class="paragraph-r">
          Vi Le Pham
          <br />
          {{ $t("roles") }}
        </h1>
      </div>
      <!-- <div class="about-languages">
        <div class="paragraph-r">
          <nuxt-link :to="switchLocalePath('ja')" class="language-link"
            >JA</nuxt-link
          >
          <nuxt-link :to="switchLocalePath('en')" class="language-link"
            >EN</nuxt-link
          >
        </div>
      </div> -->
      <div class="about-badge">
        <div class="badge-text"></div>
      </div>
      <div class="about-heading">
        <h2 class="heading-xl">Portfolio- 03</h2>
      </div>
      <div class="about-text">
        <div class="text-column">
          <p class="paragraph-r">Scroll</p>
        </div>
        <div class="text-column">
          <ul class="paragraph-r">
            <li class="link-r">
              <a
                href="http://github.com/vi-lepham"
                target="_blank"
                rel="noopener"
                >GitHub</a
              >
            </li>
            <li class="link-r">
              <a
                href="https://www.linkedin.com/in/le-vi-pham-9697861b1/"
                target="_blank"
                rel="noopener"
                >LinkedIn</a
              >
            </li>
            <li class="link-r">
              <a href="mailto:pham.levi.9@gmail.com">Email</a>
            </li>
            <li class="link-r">
              <a href="https://read.cv/phamlevi" target="_blank" rel="noopener"
                >Resume</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-about {
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  .about-container {
    height: 100vh;
  }
  .about-head,
  .about-languages {
    position: absolute;
    width: 25vw;
    height: 12.5vw;
    top: 4.16vw;
    left: 25vw;
    .paragraph-r {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin: 0;
    }
  }
  .about-languages {
    left: 58.33vw;
    .language-link {
      margin-right: 0.66vw;
      transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
      &:hover {
        text-decoration: underline;
        transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
      }
    }
    .nuxt-link-exact-active {
      font-weight: bold;
    }
  }
  .about-badge {
    top: 4.16vw;
    left: 8.33vw;
    width: 12.5vw;
    height: 12.5vw;
    position: absolute;
    background-size: 3.5vw;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url("../../assets/img/lv-logo.svg");
    .badge-text {
      top: 8%;
      left: 8%;
      right: 8%;
      bottom: 8%;
      position: absolute;
      will-change: transform;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      background-image: url("../../assets/img/circular-badge.svg");
      animation: rotate 20s linear infinite;
    }
  }
  .about-heading {
    position: absolute;
    left: 8.33vw;
    right: 8.33vw;
    bottom: 16.66vw;
    white-space: nowrap;
    .heading-xl {
      line-height: 14.93vw;
    }
  }
  .about-text {
    left: 8.33vw;
    right: 0;
    bottom: 4.16vw;
    position: absolute;
    .text-column {
      float: left;
      &:first-child {
        width: 16.66vw;
        margin: 0 16.66vw 0 16.66vw;
        animation: loading 1s linear infinite;
      }
      .paragraph-r {
        margin: 0;
      }
      li {
        float: left;
        position: relative;
        margin-right: 1.4vw;
      }
    }
  }
}
@keyframes loading {
  to {
    opacity: 0;
  }
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 768px) {
  .s-about {
    height: 100vw;
    .about-head {
      display: none;
    }
    .about-badge {
      top: 8.33vw;
      left: 8.33vw;
      width: 30vw;
      height: 30vw;
      background-size: 6.66vw;
      .badge-text {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .about-heading {
      top: 75vw;
      bottom: unset;
    }
    .about-text {
      left: unset;
      right: unset;
      bottom: unset;
      position: relative;
      text-align: right;
      .text-column {
        &:first-child {
          display: none;
        }
        &:nth-child(2) {
          top: 8.33vw;
          right: 8.33vw;
          position: absolute;
        }
        li {
          float: unset;
          margin-right: unset;
        }
      }
    }
    .about-languages {
      top: 4.33vw;
    }
  }
}
</style>

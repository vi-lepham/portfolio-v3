<template>
  <section class="s-about">
    <div class="about-container" data-color="#f3f2f7">
      <div class="about-head">
        <h1 class="paragraph-r">
          Vi Le Pham
          <br />
          Designer ・　Front End Engineer
        </h1>
      </div>
      <div class="about-badge"></div>
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
              <a href="#contact">Email</a>
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
  .about-head {
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
  .about-badge {
    top: 4.16vw;
    left: 8.33vw;
    width: 12.5vw;
    height: 12.5vw;
    position: absolute;
    background-size: 3.81vw;
    background-repeat: no-repeat;
    background-position: 50%;
    .badge-text {
      top: 12%;
      left: 12%;
      right: 12%;
      bottom: 12%;
      position: absolute;
      will-change: transform;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
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
@media only screen and (max-width: 768px) {
  .s-about {
    height: 100vw;
    .about-head {
      display: none;
    }
    .about-badge {
      top: 8.33vw;
      left: 8.33vw;
      width: 25vw;
      height: 25vw;
      background-size: 10vw;
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
  }
}
</style>

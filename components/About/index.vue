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
        <h2 class="heading-xl">Folio- 03</h2>
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
              <a href="#contact">Direct</a>
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
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4.16vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text-column {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &:first-child {
        animation: loading 1s linear infinite;
      }
      .paragraph-r {
        margin: 0;
      }
      li {
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
</style>

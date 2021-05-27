<template>
  <div class="a-loader">
    <div class="loader-container">
      <div class="loader-text">
        <div class="paragraph-r">Loading ... Please wait</div>
      </div>
      <div class="loader-heading">
        <div class="heading-xl">
          <div class="heading-column">Portfolio&mdash;</div>
          <div class="heading-column">
            <span class="heading-row">
              <i>0</i> <i>2</i> <i>3</i> <i>4</i> <i>5</i> <i>6</i> <i>7</i>
              <i>8</i> <i>9</i> <i>&nbsp;</i>
            </span>
          </div>
          <div class="heading-column">
            <span class="heading-row">
              <i>&nbsp;</i> <i>4</i> <i>5</i> <i>6</i> <i>7</i> <i>8</i>
              <i>9</i> <i>0</i> <i>2</i> <i>3</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-loader {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  overflow: hidden;
  cursor: wait;
  color: #f3f2f7;
  background: #171717;
  will-change: transform;
  .loader-container {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    will-change: transform;
  }
  .loader-text .paragraph-r {
    left: 25vw;
    bottom: 4.16vw;
    margin: 0;
    position: absolute;
    animation: loading 1s linear infinite;
  }
  .loader-heading {
    left: 8.33vw;
    bottom: 16.66vw;
    position: absolute;
    .heading-column {
      float: left;
      height: 14.93vw;
      position: relative;
      &:nth-child(2) {
        margin-left: 2.35vw;
        .heading-row {
          bottom: 0;
          top: unset;
          i {
            text-align: right;
          }
        }
      }
      &:nth-child(2),
      &:nth-child(3) {
        width: 9vw;
        height: 14.93vw;
        overflow: hidden;
        display: inline-block;
      }
    }
    .heading-row {
      top: 0;
      width: 9vw;
      text-align: center;
      position: absolute;
      will-change: transform;
    }
    i {
      width: 9vw;
      display: block;
      font-style: normal;
      text-align: center;
      position: relative;
    }
  }
}

@media only screen and (max-width: 768px) {
  .a-loader {
    .loader-text .paragraph-r {
      top: 8.33vw;
      left: 8.33vw;
      bottom: unset;
    }
    .loader-heading {
      top: 75vw;
      bottom: unset;
    }
  }
}

@keyframes loading {
  50% {
    opacity: 0;
  }
}
</style>

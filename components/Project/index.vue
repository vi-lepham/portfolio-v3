<template>
  <section class="s-project">
    <div class="project-container" :data-color="dataColor">
      <div class="project-head">
        <p class="paragraph-r">{{ collection }}</p>
        <p class="paragraph-r">§ {{ id }}</p>
        <h2 class="heading-xl">{{ title }}</h2>
      </div>
      <div class="project-wrap">
        <div class="project-content">
          <div class="content-info">
            <p class="paragraph-m">
              {{ description }}
            </p>
            <p class="paragraph-r">
              {{ stack }}
            </p>
            <a :href="siteUrl" target="_blank" rel="noopener" class="button-r">
              View site &#160; <span>→</span>
            </a>
          </div>
          <div class="content-date">
            <h3 class="heading-xl">{{ date }}</h3>
          </div>
        </div>
        <div class="project-image">
          <img
            :src="img"
            alt="Vi Le Pham, Front-end Developer"
            class="image-src"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dataColor: {
      type: String,
      required: false,
      default: "#f3f3f1"
    },
    collection: {
      type: String,
      required: false,
      default: ""
    },
    id: {
      type: Number,
      required: false,
      default: 1
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    stack: {
      type: String,
      required: false,
      default: ""
    },
    siteUrl: {
      type: String,
      required: false,
      default: ""
    },
    img: {
      type: String,
      required: false,
      default: ""
    },
    date: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.s-project {
  position: relative;
  height: fit-content;
  padding: 8.33vw;
  overflow: hidden;
  .project-head {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8.33vw;
    z-index: 1;
    .paragraph-r {
      position: relative;
      flex-basis: 50%;
      margin-bottom: 4.16vw;
      &:first-child {
        padding-left: 16.66vw;
        &:after {
          content: "";
          position: absolute;
          display: block;
          width: 16.66vw;
          height: 1px;
          background-color: #171717;
          top: 50%;
          transform: translateY(-50%);
          right: -10%;
        }
      }
      &:nth-child(2) {
        padding-left: 8.33vw;
      }
    }
  }
  .project-wrap {
    position: relative;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    &.reversed {
      .project-content {
        order: 2;
      }
      .project-image {
        order: 1;
      }
    }
  }
  .project-content {
    position: relative;
    width: 33.33vw;
    height: 69.55vw;
  }
  .content-info {
    padding: 8.33vw 8.33vw 0;
    .paragraph-m {
      margin-bottom: 2.8vw;
    }
    .paragraph-r {
      margin-bottom: 0;
    }
    .button-r {
      display: block;
      margin-top: 2.8vw;
      &:before {
        left: 0;
        top: 50%;
        width: 8vw;
        height: 1px;
        content: "";
        background: #171717;
        position: absolute;
      }
      span {
        transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }
  }
  .content-date {
    position: absolute;
    bottom: 0;
    left: 10vw;
    width: 0;
    height: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  }
  .project-image {
    position: relative;
    width: 50vw;
    height: 69.55vw;
    overflow: hidden;
    will-change: transform;
    .image-src {
      left: 0;
      top: -15%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      will-change: transform;
    }
  }
}
@media only screen and (max-width: 768px) {
  .s-project {
    padding: 16.66vw 8.33vw;
    .project-head {
      .paragraph-r {
        &:first-child {
          order: 2;
          flex-basis: 85%;
          padding-left: unset;
        }
        &:nth-child(2) {
          flex-basis: 15%;
          padding-left: unset;
        }
      }
    }
    .project-content {
      order: 2;
      width: unset;
      height: unset;
    }
    .content-info {
      padding: 0;
      margin: 8.33vw 0 0;
      .paragraph-m {
        margin-bottom: 4.16vw;
      }
      .button-r {
        margin: 8.33vw 0;
        &:before {
          width: 16.66vw;
        }
      }
    }
    .content-date {
      left: 0;
      transform: rotate(0deg);
    }
    .project-image {
      order: 1;
      width: 100%;
      height: 120vw;
      .image-src {
        top: -25%;
        height: 105%;
      }
    }
  }
}
.button-r:hover {
  opacity: 0.5;
  span {
    display: inline-block;
    animation: arrowAnim 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
}

@keyframes arrowAnim {
  100% {
    transform: translateX(10px);
  }
}
</style>

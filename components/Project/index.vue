<template>
  <div class="s-project">
    <div class="project-container" :data-color="dataColor">
      <div class="project-head">
        <p class="paragraph-m">{{ collection }}</p>
        <p class="paragraph-m">§ {{ id }}</p>
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
            <ul class="paragraph-r">
              <li v-for="(link, id) in links" :key="id" class="link-r">
                <a :href="link.url" target="_blank" rel="noopener">
                  <github-icon v-if="link.type === 'github'"></github-icon>
                  <p v-if="link.type === 'storybook'" class="parahraph-r">
                    or View demo →
                  </p>
                  <p v-if="link.type === 'site'" class="parahraph-r">
                    or View site →
                  </p>
                </a>
              </li>
            </ul>
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
  </div>
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
    links: {
      type: Array,
      required: false,
      default: () => []
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
  height: auto;
  padding: 8.33vw;
  overflow: hidden;
  .project-head {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8.33vw;
    z-index: 1;
    .paragraph-m {
      position: relative;
      flex-basis: 50%;
      margin-bottom: 4.16vw;
      &:first-child {
        padding-left: 16.66vw;
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
  }
  .project-content {
    position: relative;
    width: 33.33vw;
    height: 79.55vw;
  }
  .content-info {
    padding: 16.66vw 8.33vw 0;
    .paragraph-m {
      margin-bottom: 2.8vw;
    }
    ul.paragraph-r {
      position: relative;
      display: block;
      margin-top: 2.8vw;
      padding-left: 8.65vw;
      svg {
        width: 20px;
        height: 20px;
        opacity: 0.5;
        &:hover {
          opacity: 1;
          transition: 0.5s var(--easing);
        }
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
    height: 79.55vw;
    overflow: hidden;
    will-change: transform;
    .image-src {
      left: 0;
      top: 0;
      top: -15%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      will-change: transform;
    }
  }
}
</style>

<template>
  <div class="s-project">
    <div class="project-container" :data-color="dataColor">
      <div class="project-head">
        <p class="paragraph-m">{{ collection }}</p>
        <p class="paragraph-m">§ {{ id }}</p>
        <h2 class="heading-xl">{{ title }}</h2>
      </div>
      <div class="project-wrap">
        <div class="project-image">
          <img
            :src="img"
            alt="Vi Le Pham, Front-end Developer"
            class="image-src"
          />
        </div>
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

<template>
  <div class="container">
    <loader></loader>
    <main class="a-main" data-scroll-container>
      <article class="a-article">
        <about></about>
        <intro></intro>
        <client-projects></client-projects>
        <project
          v-for="(project, id) in projects"
          :key="id"
          :dataColor="project.dataColor"
          :collection="project.collection"
          :id="id + 1"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :links="project.links"
          :img="require(`../assets/img/${project.img}`)"
          :date="project.date"
        ></project>
        <app-footer></app-footer>
      </article>
    </main>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import About from "../components/About";
import Intro from "../components/Intro";
import Project from "../components/Project";
import ClientProjects from "../components/ClientProjects";
import AppFooter from "../components/AppFooter";

export default {
  components: {
    Loader,
    About,
    Intro,
    Project,
    ClientProjects,
    AppFooter
  },
  data() {
    return {
      projects: [
        {
          dataColor: "",
          collection: "Client Project's Demo",
          title: "Cloud Karte",
          description: this.$t("karte"),
          stack: "Nuxtjs, TailwindCSS, Storybook",
          links: {
            live: "https://karte-storybook.netlify.app"
          },
          img: "karte.png",
          date: "2021"
        },
        {
          dataColor: "rgb(245, 229, 177)",
          collection: "Side Projects - Ecommerce",
          title: "Skivi",
          description: this.$t("skivi"),
          stack: "React, Redux, Firebase",
          links: {
            github: "https://github.com/vi-lepham/skivi-ecommerce",
            live: "https://shop-skivi.netlify.app"
          },
          img: "skivi.jpeg",
          date: "2020"
        },
        {
          dataColor: "rgb(163, 185, 180)",
          collection: "Side Projects - Web App",
          title: "Pines&Butter",
          description: this.$t("pnb"),
          stack: "React, Hooks, Spoonacular API",
          links: {
            github: "https://github.com/vi-lepham/pines-n-butter",
            live: "https://pinesandbutter.netlify.app"
          },
          img: "pinesnbutter.png",
          date: "2020"
        },
        {
          dataColor: "#c2cac3",
          collection: "Animation Experiments",
          title: "Bella",
          description: this.$t("bella"),
          stack: "Nuxtjs, GSAP, Barbajs",
          links: {
            github: "https://github.com/vi-lepham/bella",
            live: "https://bella-bella.netlify.app"
          },
          img: "bella.png",
          date: "2021"
        },
        {
          dataColor: "#f3f3f1",
          collection: "Animation Experiments",
          title: "Rita",
          description: this.$t("rita"),
          stack: "locomotive-scroll",
          links: {
            github: "https://github.com/vi-lepham/rita-landing",
            live: "https://rita-landing.netlify.app"
          },
          img: "rita.png",
          date: "2021"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.a-main {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  margin: auto;
}
</style>

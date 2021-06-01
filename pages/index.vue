<template>
  <div class="container">
    <loader></loader>
    <main class="a-main" data-scroll-container>
      <article class="a-article">
        <about></about>
        <intro></intro>
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
        <client-projects></client-projects>
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
import AppFooter from "../components/AppFooter"

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
          dataColor: "#c2cac3",
          collection: "Animation Experiments",
          title: "Bella",
          description:
            "A landing page project inspired by the amazing Stock Dutch Design website",
          stack: "Nuxtjs, GSAP, Barbajs",
          links: {
            github: "https://github.com/vi-lepham/bella",
            live: "https://bella-bella.netlify.app"
          },
          img: "bella.png",
          date: "04.21"
        },
        {
          dataColor: "rgb(192, 161, 161)",
          collection: "Animation Experiments",
          title: "Rita",
          description:
            "A landing page with scrolling grids powered by Locomotive Scroll",
          stack: "locomotive-scroll",
          links: {
            github: "https://github.com/vi-lepham/rita-landing",
            live: "https://rita-landing.netlify.app"
          },
          img: "rita.png",
          date: "01.21"
        },
        {
          dataColor: "#f3f3f1",
          collection: "Side Projects - Ecommerce",
          title: "Skivi",
          description:
            "A ecommerce app built with React and Firebase database.",
          stack: "React, Redux, Firebase",
          links: {
            github: "https://github.com/vi-lepham/skivi-ecommerce",
            live: "https://shop-skivi.netlify.app"
          },
          img: "skivi.jpeg",
          date: "05.20"
        },
        {
          dataColor: "rgb(163, 185, 180)",
          collection: "Side Projects - Web App",
          title: "Pines&Butter",
          description:
            'A recipe finder app that answers to the question: "Too lazy to shop. What can I cook from my leftovers?"',
          stack: "React, Hooks, Spoonacular API",
          links: {
            github: "https://github.com/vi-lepham/pines-n-butter",
            live: "https://pinesandbutter.netlify.app"
          },
          img: "pinesnbutter.png",
          date: "07.20"
        },
      ]
    };
  },
};
</script>

<style>
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

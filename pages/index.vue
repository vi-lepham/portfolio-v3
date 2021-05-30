<template>
  <div class="container">
    <loader></loader>
    <main class="a-main" data-scroll-container>
      <article class="a-article">
        <about data-scroll-section></about>
        <intro data-scroll-section></intro>
        <project
          v-for="(project, id) in projects"
          :key="id"
          :dataColor="project.dataColor"
          :collection="project.collection"
          :id="id + 1"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :siteUrl="project.siteUrl"
          :img="require(`../assets/img/${project.img}`)"
          :date="project.date"
          data-scroll-section
        ></project>
        <other-projects></other-projects>
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
import OtherProjects from "../components/OtherProjects";
import AppFooter from "../components/AppFooter"

export default {
  components: {
    Loader,
    About,
    Intro,
    Project,
    OtherProjects,
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
            "A landing page project inspired by the amazing https://stockdutchdesign.com/ by Exo Ape.",
          stack: "Nuxtjs, GSAP, Barbajs",
          siteUrl: "",
          img: "bella.png",
          date: "04.21"
        },
        {
          dataColor: "#f3f3f1",
          collection: "Animation Experiments",
          title: "3D Room Exhibition",
          description:
            "A highly experimental 3D room layout for a gallery that aims to show exhibition details in an interesting way.",
          stack: "Nuxtjs, anime.js",
          siteUrl: "",
          img: "mirai.png",
          date: "01.21"
        },
        {
          dataColor: "rgb(255, 232, 197)",
          collection: "Side Projects - Ecommerce",
          title: "Skivi",
          description:
            "A ecommerce app built with React and Firebase database.",
          stack: "React, Redux, Firebase",
          siteUrl: "https://skivi-clothing.netlify.app/",
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
          siteUrl: "https://pinesandbutter.netlify.app",
          img: "pinesnbutter.png",
          date: "07.20"
        },
      ]
    };
  },
  mounted() {
    const body = document.querySelector("body");
    body.classList.add("a-body");
  }
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

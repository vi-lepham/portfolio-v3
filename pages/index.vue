<template>
  <div class="container">
    <loader></loader>
    <div class="a-background"></div>
    <main class="a-main">
      <article class="a-article">
        <about></about>
        <intro></intro>
        <project
          v-for="(project, id) in projects"
          :key="id"
          :dataColor="project.dataColor"
          :collection="project.collection"
          :id="project.id"
          :title="project.title"
          :description="project.description"
          :stack="project.stack"
          :links="project.links"
          :img="project.img"
          :date="project.date"
        ></project>
      </article>
    </main>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import About from "../components/About";
import Intro from "../components/Intro";
import Project from "../components/Project";

export default {
  components: {
    Loader,
    About,
    Intro,
    Project
  },
  data() {
    return {
      projects: [
        {
          dataColor: "f3f3f1",
          collection: "Animation Experiments",
          id: 1,
          title: "Bella",
          description:
            "A landing page project inspired by the amazing https://stockdutchdesign.com/ by Exo Ape.",
          stack: "Nuxtjs, GSAP, Barbajs",
          links: [
            {
              cta: "Github",
              url: "https://github.com/vi-lepham/bella"
            },
            {
              cta: "・ View demo →",
              url: ""
            }
          ],
          img: "'../assets/img/bella.png'",
          date: "04.21"
        },
        {
          dataColor: "f3f3f1",
          collection: "Animation Experiments",
          id: 1,
          title: "Bella",
          description:
            "A landing page project inspired by the amazing https://stockdutchdesign.com/ by Exo Ape.",
          stack: "Nuxtjs, GSAP, Barbajs",
          links: [
            {
              cta: "Github",
              url: "https://github.com/vi-lepham/bella"
            },
            {
              cta: "・ View demo →",
              url: ""
            }
          ],
          img: "'../assets/img/bella.png'",
          date: "03.21"
        }
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

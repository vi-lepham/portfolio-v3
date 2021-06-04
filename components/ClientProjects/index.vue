<template>
  <section class="s-client">
    <div class="client-projects-container">
      <h2 class="heading-xl">Client Projects</h2>
      <p class="heading-m">@Monotas</p>
      <ul class="paragraph-r">
        <li>
          <a href="https://www.figma.com/file/0hoMZm7EWahMDPpNABuci0/Untitled?node-id=0%3A1" target="_blank" rel="noopener" follow="nofollow">
            2021: (Ongoing) BizSuite &mdash; Web Design, Front-end Development [Nuxt,
            TailwindCSS, Storybook]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="https://www.figma.com/file/3BSG5gXbBfWM77YnswBP3r/Morris?node-id=0%3A1" target="_blank" rel="noopener" follow="nofollow">
            2020: Morris &mdash; Web Design
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://karte-storybook.netlify.app" target="_blank" rel="noopener" follow="nofollow">
            2020: Cloud Karte &mdash; Front-end Development [Nuxt, TailwindCSS,
            Storybook]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="#" target="_blank" rel="noopener" follow="nofollow">
            2020: (Awaiting back-end) Monotas' Owned Media &mdash; Web Design, Front-end Development
            [Nuxt]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="#" target="_blank" rel="noopener" follow="nofollow">
            2020: (Discontinued) Tokyo Chuo Rotary &mdash; Web Design, Front-end Development
            [Nuxt, Storybook] 
          </a>
        </li>
      </ul>
      <p class="heading-m">Micro Projects</p>
      <ul class="paragraph-r">
        <li>
          <a href="http://timesoftiu.com" target="_blank" rel="noopener" follow="nofollow">
            TimesOfTIU [Figma, CSS, Wordpress]
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-client {
  padding: 8.33vw;
  padding-bottom: 1.33vw;
  position: relative;
  .paragraph-r {
    margin-bottom: 4.167vw;
  }
  .heading-xl {
    margin-bottom: 8.33vw;
  }
  .heading-m {
    margin-bottom: 1.33vw;
  }
  a {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    &:hover {
      text-decoration: underline;
      transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    }
  }
  .list-r:last-of-type {
    margin-bottom: 0;
  }
  .heading-m,
  ul {
    margin-left: 16.66vw;
  }
}
@media only screen and (max-width: 768px) {
  .s-client {
    padding-top: 16.66vw;
    padding-bottom: 16.66vw;
    .heading-xl {
      margin-bottom: 16vw;
    }
    .heading-m {
      font-size: 3.733vw;
      line-height: 3.733vw;
      margin-bottom: 4vw;
    }
    .list-r {
      margin-bottom: 8vw;
    }
  }
}
</style>

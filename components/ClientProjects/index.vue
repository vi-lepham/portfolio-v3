<template>
  <section class="s-client">
    <div class="client-projects-container">
      <h2 class="heading-xl">Other Projects</h2>
      <p class="heading-r">@Monotas</p>
      <ul class="list-r">
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            2021: BizSuite &mdash; Web Design, Front-end Development [Nuxt,
            TailwindCSS, Storybook]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            2020: Morris &mdash; Web Design
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            2020: Cloud Karte &mdash; Front-end Development [Nuxt, TailwindCSS,
            Storybook]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            2020: Monotas' Owned Media &mdash; Web Design, Front-end Development
            [Nuxt]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            2020: Tokyo Chuo Rotary &mdash; Web Design, Front-end Development
            [Nuxt, Storybook]
          </a>
        </li>
      </ul>
      <p class="heading-r">Micro Projects</p>
      <ul class="list-r">
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            Portfolio- 01 [HTML, CSS, GSAP]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://timesoftiu.com" target="_blank" rel="noopener" follow="nofollow">
            TimesOfTIU [Figma, CSS, Wordpress]
          </a>
        </li>
        <li>&nbsp;</li>
        <li>
          <a href="http://" target="_blank" rel="noopener" follow="nofollow">
            Meditation App [HTML, CSS, JS]
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-client {
  padding: 8.33vw;
  position: relative;
  .heading-xl,
  .list-r {
    margin-bottom: 4.167vw;
  }
  a {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    text-decoration: none;
  }
  .list-r:last-of-type {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 768px) {
  .s-client {
    padding-top: 16.66vw;
    padding-bottom: 16.66vw;
    .heading-xl {
      margin-bottom: 16vw;
    }
    .heading-r {
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

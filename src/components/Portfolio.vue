<template> 
  <div id="portfolio" class="sect-pt4 container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 class="title-B">{{ site.portfolyo.baslik }}</h3>
          <p class="subtitle-a">
            {{ site.portfolyo.altbaslik }} 
          </p>
          <div class="line-mf"></div>
        </div>
      </div>
    </div>

    <Splide :options="options" key="portfolio_slider">
      <SplideSlide
        v-for="(portfolio, index) in portfolios"
        :key="'portfolio_slider_' + index"
      >
        <img
          class="img-thumbnail img-fluid shadow-sm"
          :data-splide-lazy="portfolio.img"
          :alt="portfolio.alt"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    Splide,
    SplideSlide,
  },

  mounted() {
    let ports = require.context("./../assets/images/portfolio", false, /\.((webp)$)?((jpg)$)?((png)$)?((jpeg)$)?((gif)$)?((svg)$)?((tiff)$)?/).keys();
    ports.forEach(element => {
      element = element.slice(2);
      this.portfolios.push({img: require("@/assets/images/portfolio/" + element), alt: element});
    });
  },

  data() {
    return {

      portfolios: [],


      options: {
        type: "loop", // loop
        rewind: true,
        perPage: 4,
        perMove: 1,
        width: "100%",
        height: 800,
        // padding: 10,
        // gap: "1rem",
        lazyload: true,
        // cover: true,
        waitForTransition: false,
        autoplay: true,
        interval: 3000,
        lazyLoad: "sequential",
        // direction: 'ttb',
        updateOnMove: true,
        breakpoints: {
          640: {
            // type: "loop",
            perPage: 1,
            perMove: 1,
            arrows: false,
            height: 500,
            pagination: true,
            interval: 4000,

          },
          912: {
            perPage: 2,
            gap: false,
            arrows: false,
          },
          1200: {
            perPage: 3,
            gap: false,
            arrows: false,
          },
        },
        pagination: false,
      },
    };
  },
};
</script>
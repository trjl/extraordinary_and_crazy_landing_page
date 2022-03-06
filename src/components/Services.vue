<template>
  <div class="py-5">
    
    <div id="services" class="col-sm-12 pt-5">
      <div class="title-box text-center">
        <h2 class="title-B">{{ site.hizmet.baslik }}</h2>
        <p class="subtitle-a">{{ site.hizmet.altbaslik }}</p>
        <div class="line-mf"></div>
      </div>
    </div>
    
    <Splide :options="options" key="services_slider">
      <SplideSlide v-for="(slide, index) in services" :key="'services_slider_' + index">
          <img :data-splide-lazy="slide.img" :alt="slide.alt" />
          <div v-if="!slide.hidden"
            class="
              position-absolute
              top-0
              start-0
              end-0
              shadow
              bg-dark
              opacity-75
              bg-gradient
              m-md-3
            "
          >
            <div class="text-center text-white p-4">
              <h5 class="text-white">{{ slide.title }}</h5>
              <small>{{ slide.explanation }}</small>
            </div>

          </div>
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
    this.site.hizmet.slidelar.forEach(element => {
      this.services.push({
        img: require("@/assets/images/" + element['img']),
        alt: element['img'],
        hidden: element['aciklama_alanini_sakla'],
        title: element['title'],
        explanation: element['explanation'],
      })
    });
  },

  data() {
    return {
      services: [],

      options: {
        type: "loop", // loop
        rewind: true,
        perPage: 3,
        perMove: 1,
        width: "100%",
        height: 800,
        // padding: 10,
        // gap: "1rem",
        lazyload: true,
        cover: true,
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
            height: 400,
            pagination: true,
            interval: 5000,
          },
          1200: {
            type: "loop",
            perPage: 2,
            // perMove: 1,
            // arrows: false,
            // height: 500,
          },
        },
        pagination: false,
      },

      
    };
  },
};
</script>


<template>
  <div
    id="seperator"
    class="section-counter paralax-mf bg-image mt-5 shadow"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/generic/users.webp') + ')',
    }"
  >
    <div class="overlay-mf"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="counter-box pt-4 pt-md-0">


          <Splide :options="options" key="testimonials_slider">
            <SplideSlide
              v-for="(item, index) in testimonials"
              :key="'testimonials_itemr' + index"
            >
              <i class="bi bi-person-check-fill" style="font-size: 5rem;"></i>
              <h2 class="text-white">{{ item.user }}</h2>
              <span>{{ item.message }}</span>
              <div>
                <img v-for="star in item.stars" :key="'star' + index+star" src="@/assets/images/generic/star.svg"  alt="star" width="30" class="img-fluid pt-3" />
              </div>
            </SplideSlide>
          </Splide>


        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      testimonials: this.site.kullanici_yorumlari,
      options: {
        type: 'loop',
        rewind: true,
        autoplay: true,
        arrows: false,
        pagination: false,

        interval: 6000,
      }
    }
  },
};
</script>
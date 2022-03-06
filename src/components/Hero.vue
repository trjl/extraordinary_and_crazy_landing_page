<template>
  <div
    id="hero"
    class="hero route bg-image"
    :style="{
      backgroundImage: 'url(' + img + ')',
    }"
  >

    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <!-- <img src="@/assets/svgs/logo-white.svg" alt="kitapdoku" width="250" /> -->

          <p class="hero-subtitle pt-5">
            <span>
              <VueWriter
                :array="strings"
                :typeSpeed="typeSpeed"
                :eraseSpeed="eraseSpeed"
                :delay="delay"
                :intervals="intervals"
                caret="caret"
              >
              </VueWriter>
            </span>

            <span>{{ site.hero.alt }}</span>
          </p>
          <p class="pt-3">
              <router-link to="/#services">
                <button class="btn btn-success js-scroll ">
                  <span>{{ site.hero.buton_text }}</span>
                  <span class="bi-chevron-right px-1" style="font-size: 1rem;"></span>
                  
                </button>
              </router-link>

          </p>
        </div>
      </div>
    </div>
  </div>
</template>






<script>
import VueWriter from "vue-writer";

export default {
  components: {
    VueWriter,
  },
  data() {
    return {
      img: require("@/assets/images/" + this.site.hero['img']),

      strings: this.site.hero.strings,
      typeSpeed: 70,
      eraseSpeed: 50,
      delay: 850,
      intervals: 100,
      // caret: "cursor", // underscore
    };
  },
};
</script>







<style>
/* .is-typed {
  font-family: "Monaco";
} */

.is-typed span.typed {
  color: white;
}

.is-typed span.cursor {
  display: inline-block;
  width: 5px;
  background-color: white;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  20% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
  20% {
    background-color: transparent;
  }
}
</style>
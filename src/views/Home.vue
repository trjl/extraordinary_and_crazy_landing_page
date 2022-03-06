<template>
  <div>
    <hero />
    <sticky-logo />

    <main id="main">
      <services />


      <!-- <div class="text-center py-5">
        <img
          src="@/assets/svgs/ill-2.svg"
          alt="ill2"
          width="1000"
          class="img-fluid"
        />
        <img
          src="@/assets/svgs/ill-3.svg"
          alt="ill3"
          width="1000"
          class="img-fluid"
        />
      </div> -->

      <testimonials />

      <portfolio />

      <!-- <subscribe /> -->

      <seperator />

      
    </main>
  </div>
</template>


<script>
import Hero from "../components/Hero.vue";
import Seperator from "../components/Seperator.vue";
import StickyLogo from "../components/StickyLogo.vue";
import Services from "../components/Services.vue";
import Portfolio from "../components/Portfolio.vue";
import Testimonials from "../components/Testimonials.vue";
// import Subscribe from "../components/Subscribe.vue"

export default {
  components: {
    Hero,
    Seperator,
    StickyLogo,
    Services,
    Portfolio,
    Testimonials,
    // Subscribe,
  },
};
</script>


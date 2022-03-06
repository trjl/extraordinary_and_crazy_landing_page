<template>
  <mini-hero :title="site.about.baslik" />
  <about-card />
</template>


<script>
import AboutCard from "../components/partials/AboutCard.vue";
import MiniHero from "../components/partials/MiniHero.vue";

export default {
  components: {
    AboutCard,
    MiniHero,
  },
};
</script>
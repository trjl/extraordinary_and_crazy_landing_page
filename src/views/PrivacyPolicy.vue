<template>
  <div>
    <mini-hero title="GİZLİLİK POLİTİKASI" />

    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="box-shadow-full">

          <div class="about-me pt-4">
            <p class="lead" style="white-space: pre-line">
              {{ site.gizlilik_politikası }}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import MiniHero from "../components/partials/MiniHero.vue";
export default {
  components: {
    MiniHero,
  },
};
</script>
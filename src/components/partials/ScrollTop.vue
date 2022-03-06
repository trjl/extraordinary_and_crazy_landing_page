<template>
  <div
    class="d-flex flex-column justify-content-end"
    v-on:click="performScroll()"
    role="button"
  >
    <i
      v-show="showScrollTop"
      class="bi bi-arrow-up-circle-fill text-black"
      style="font-size: 2em"
    ></i>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showScrollTop: false,
    };
  },

  created() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        this.showScrollTop = true;
      } else {
        this.showScrollTop = false;
      }
    });
  },

  unmounted() {
    window.removeEventListener("scroll", () => {});
  },

  methods: {
    performScroll() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
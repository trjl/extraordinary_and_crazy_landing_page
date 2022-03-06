<template>
  <div
    v-if="loader"
    class="
      position-fixed
      top-0
      bottom-0
      start-0
      end-0
      d-flex
      justify-content-center
      align-items-center
    "
    style="z-index: 9999; background-color: #f5f5f5"
  >
    <div
      class="spinner-border text-info"
      style="width: 4rem; height: 4rem"
      role="status"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      loader: true,
    };
  },

  created() {
    document.body.style.overflow = "hidden";
  },

  mounted() {
    window.addEventListener("load", () => {
      this.loader = false;
      document.body.style.overflow = "visible";
    });
  },

  unmounted() {
    window.removeEventListener("load", () => {});
  },
};
</script>
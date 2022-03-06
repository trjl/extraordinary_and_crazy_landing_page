<template>
  <div v-on:click="followUrl()" role="button">
    <img 
      class="img-fluid contact"
      src="@/assets/images/logo/whatsapp.gif"
      alt="whatsapp"
      width="63"
      height="63"
    />
  </div>
</template>


<script>
export default {
  methods: {
    followUrl() {
      window.open(
        "https://api.whatsapp.com/send?phone=" + this.site.tel.no + "&text=" + this.site.tel.whatsapp_mesaj,
      );
    },
  },
};
</script>


<style scoped>
img.contact {
  z-index: 800;
  -webkit-filter: drop-shadow(5px 5px 5px black);
  filter: drop-shadow(4px 4px 4px green);
}
</style>
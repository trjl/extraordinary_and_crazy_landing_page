<template>
  <!-- <div v-on:click="openMailClient()" role="button" class="d-none d-md-block"> -->
  <div v-on:click="openMailClient()" role="button">
    <img
      class="img-fluid contact"
      src="@/assets/images/logo/email.webp"
      alt="whatsapp"
      width="60"
      height="60"
    />
  </div>
</template>

<script>
export default {
  methods: {
    openMailClient() {
      window.open('mailto:' + this.site.eposta.adres + '?subject=' + this.site.eposta.baslik + '&body=' + this.site.eposta.icerik);
    },
  },
};
</script>


<style scoped>
img.contact {
  z-index: 800;
  -webkit-filter: drop-shadow(5px 5px 5px black);
  filter: drop-shadow(4px 4px 4px orange);
}
</style>
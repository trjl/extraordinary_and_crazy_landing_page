<template>
  <a :href="'tel:' + site.tel.no" role="button">
    <img 
      class="img-fluid contact"
      src="@/assets/images/logo/phone.webp"
      alt="phone"
      width="60"
      height="60"
    />
  </a>
</template>



<style scoped>
img.contact {
  z-index: 800;
  -webkit-filter: drop-shadow(5px 5px 5px black);
  filter: drop-shadow(4px 4px 4px navy);
}
</style>
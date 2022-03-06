<template>
  <nav-bar />
  
  <router-view />

  <footer-x />

  <loader />

  <!-- <div class="fixed-bottom bg-dark">
    <div class="d-flex justify-content-between m-3 mb-5">
      <scroll-top />
      <div>
        <email />
        <whatsapp />
      </div>
    </div>
  </div> -->


  <div class="position-fixed bottom-0 start-0 px-2" style="z-index: 998">
    <scroll-top />
  </div>


  <div class="position-fixed d-flex flex-column justify-content-between bottom-0 end-0 p-2" style="height: 13rem; z-index: 999;">
    <whatsapp />
    <phone />
    <email />
  </div>


</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterX from "./components/FooterX.vue";
import Loader from "./components/Loader.vue";
import Whatsapp from "./components/contact-buttons/Whatsapp.vue";
import Email from "./components/contact-buttons/Email.vue";
import ScrollTop from "./components/partials/ScrollTop.vue"
import Phone from './components/contact-buttons/Phone.vue';

export default {
  name: "App",
  components: {
    NavBar,
    FooterX,
    Loader,
    Whatsapp,
    Email,
    ScrollTop,
    Phone,
  },
};
    Phone
</script>




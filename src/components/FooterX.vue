<template>
    <footer class="text-white page-footer font-small mdb-color pt-4">
      <div class="container text-md-left">
        <div class="row text-center text-md-left mt-3 pb-3">




          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <img
              :src="navbar_logo"
              alt=""
              class="img-fluid"
            />
            <p class="pt-4" style="white-space: pre-line">
              {{ site.slogan }} 
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />




          <div class="col-md-4 col-lg-2 col-xl-2 mx-auto my-3">
            <h6 class="text-white text-uppercase mb-4 font-weight-bold">
              Bizi takip edin
            </h6>
            <div
              class="d-flex justify-content-center"
              @click="clickInstagram()"
              role="button"
            >
              <i class="bi-instagram" style="font-size: 2rem"></i>
              <span class="align-self-center p-2">Instagram</span>
            </div>
            <div
              class="d-flex justify-content-center"
              @click="clickFacebook()"
              role="button"
            >
              <i class="bi-facebook" style="font-size: 2rem"></i>
              <span class="align-self-center p-2">Facebook</span>
            </div>
          </div>



          <hr class="w-100 clearfix d-md-none" />



          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-white text-uppercase mb-4 font-weight-bold">
              İletişim
            </h6>
            <!-- <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p> -->
            <p>
              <span role="button" class="text-white" @click="openMailClient()"><i class="bi-envelope-fill px-1"></i>{{ site.eposta.adres }}</span>
            </p>
            <p>
              <a class="text-white" :href="'tel:' + site.tel.no"><i class="bi-telephone-fill px-1"></i>{{ site.tel.no }}</a>
            </p>
              
          </div>



          <hr class="w-100 clearfix d-md-none" />



          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-white text-uppercase mb-4 font-weight-bold">
              Linkler
            </h6>
            <div v-for="route in $router.options.routes" :key="route.path">
                <router-link class="text-white" style="font-size: 0.8rem" :to="{path: route.path, hash: route.hash}">{{ route.name }}</router-link>
            </div>
          </div>



          
        </div>

        <hr />

        <div class="row d-flex align-items-center">
          
          <div class="col-md-5 col-lg-4 ">
            <div class="text-center text-md-start text-white">
              <p>©2022 {{ site.resmi_sirket_adi }} Tüm hakları saklıdır.</p>
            </div>
          </div>

          <!-- Grid column -->
          <div class="col-md-7 col-lg-8">
            <p class="text-md-end text-center">
              Created by
              <a class="text-white" href="https://github.com/oceceli">
                <strong>oceceli</strong>
              </a>
            </p>
          </div>
          <!-- Grid column -->


        </div>
      </div>
    </footer>
</template>


<script>
export default {

  data() {
    return {
      navbar_logo: require('./../assets/images/' + this.site.navbar_logo),
    }
  },

  methods: {
    clickInstagram() {
      window.open(this.site.footer.instagram_link);
    },
    clickFacebook() {
      window.open(this.site.footer.facebook_link);
    },
    openMailClient() {
      window.open('mailto:' + this.site.eposta.adres + '?subject=' + this.site.eposta.baslik + '&body=' + this.site.eposta.icerik);
    },
  },
};
</script>
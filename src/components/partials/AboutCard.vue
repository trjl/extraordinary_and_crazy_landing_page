<template>
  <section id="about" class="about-mf sect-pt4 route">
    <div class="container">
      <div class="box-shadow-full">
        <div class="row">
          <div class="col-sm-6 col-md-5">
            <div class="about-img">
              <img
                :src="img"
                class="img-fluid rounded b-shadow-a"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-7">
            <div class="about-info">
              <p>
                <i class="bi-building px-2"></i>
                <span class="title-s">Kurum: </span>
                <span>{{ site.about.kurum }}</span>
              </p>
              <p>
                <i class="bi-envelope px-2"></i>
                <span class="title-s">E-posta: </span>
                <span>{{ site.eposta.adres }}</span>
              </p>
              <p>
                <i class="bi-telephone px-2"></i>
                <span class="title-s">Phone: </span>
                <span>{{ site.tel.no }}</span>
              </p>
              <hr class="my-4" />
              <p>
                <i class="bi-geo-alt px-2"></i>
                <span class="title-s">Adres: </span>
                <span style="white-space: pre-line">{{ site.about.adres }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="about-me pt-4">
          <p class="lead" style="white-space: pre-line">
            {{ site.about.aciklama }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      img: require("@/assets/images/" + this.site.about.thumbnail_img),
    }
  },
};
</script>
<template>
  <div
    id="seperator"
    class="section-counter paralax-mf bg-image"
    :style="{
      backgroundImage: 'url(' + img + ')',
    }"
  >
    <div class="overlay-mf"></div>
    <div class="container-fluid position-relative">
      <div class="row">

          
        <div v-for="rehber in site.rehber" :key="rehber.baslik" class="col-sm-3 col-lg-3 py-5 py-md-0">
          <div class="counter-box pt-4 pt-md-0">
            <div class="counter-ico">
              <span class="ico-circle"><i :class="rehber.icon"></i></span>
            </div>
            <span class="counter-text">{{rehber.baslik}}</span>
            <div>
              {{ rehber.altbaslik }}
            </div>
            <div class="pt-2"><strong>{{ rehber.ekstra_alan }}</strong></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/images/" + this.site.kullanici_yorumlari_arka_plan),
    }
  },
}
</script>

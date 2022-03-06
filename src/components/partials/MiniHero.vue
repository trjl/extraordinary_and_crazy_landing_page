<template>
    <div
    
      class="hero hero-single route bg-image"
      :style="{
        backgroundImage: 'url(' + top_img + ')',
      }"
    >
      <div class="overlay-mf"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <h2 class="hero-title mb-4">{{title}}</h2>
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/">ANASAYFA</router-link>
              </li>
              <li class="breadcrumb-item active">{{ $route.name }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        img: String,
    },

    data() {
      return {
        top_img: require("@/assets/images/" + this.site.about.top_img),
      }
    },

}
</script>
<template>
  <header
    id="header"
    :class="{ 'bg-dark': !scrollOnTop }"
    class="fixed-top shadow-sm"
  >
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <router-link to="/">
          <img :src="navbar_logo" alt="logo" width="180" class="img-fluid">
        </router-link>
      </h1>

      <div id="navbar" class="navbar">
        <ul>
          <li v-for="(route) in $router.options.routes" :key="route.path">
            <a class="nav-link" :class="{'active' : isMenuActive(route)}">
              <span v-if="!route.hasOwnProperty('hideOnMenu')">
                <router-link :to="{path: route.path, hash: route.hash}">{{ route.name }}</router-link>
              </span>
            </a>
          </li>
        </ul>
        <i
          v-show="!openMobilNav"
          @click="toggle()"
          class="bi bi-list mobile-nav-toggle"
        ></i>

        <div
          v-show="openMobilNav"
          class="position-fixed top-0 bottom-0 start-0 end-0"
        >
          <div class="navbar-mobile">
            <ul>
              <li v-for="route in $router.options.routes" :key="route.path">
                <!-- <router-link @click="toggle()" :to="route.path">{{route.name}}</router-link> -->

                <span v-if="!route.hasOwnProperty('hideOnMenu')">
                  <router-link @click="toggle()" :to="{path: route.path, hash: route.hash}">{{ route.name }}</router-link>
                </span>
              </li>
            </ul>

            <i
              @click="toggle()"
              class="bi bi-x mobile-nav-toggle"
              style="z-index: 999"
            ></i>
          </div>
        </div>
      </div>
    </div>


  </header>
</template>


<script>
export default {
  data() {
    return {
      scrollOnTop: true,
      openMobilNav: false,

      navbar_logo: require('@/assets/images/' + this.site.navbar_logo),

    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", () => {});
  },

  methods: {
    onScroll() {
      if (window.scrollY <= 100) {
        this.scrollOnTop = true;
      } else {
        this.scrollOnTop = false;
      }
    },

    toggle() {
      this.openMobilNav = !this.openMobilNav;
    },
    
    isMenuActive(route) {
      if(route.path == this.$route.path && ! route.hash) {
        return true;
      }
    }

  },

  watch: {
    openMobilNav(value) {
      value
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    },

  },
};
</script>

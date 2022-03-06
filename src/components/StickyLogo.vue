<template>
    <!-- <div class="d-none d-xxl-block sticky-lg-top pt-5" style="z-index: 500"> -->
    <div v-if="site.sticky_logo.enabled" class="d-none d-xxl-block sticky-xxl-top pt-5" style="z-index: 500">
      <img
        class="position-absolute"
        width="200"
        height="200"
        :src="sticky_logo"
      />
    </div>
</template>

<script>
export default {
  name: 'StickyLogo',
  data() {
    return {
      sticky_logo: require('@/assets/images/' + this.site.sticky_logo["img"]),
    }
  },
}
</script>
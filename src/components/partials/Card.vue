<template>
  <div class="col">
    <div class="service-box">
      <div class="service-ico">
        <span class="ico-circle" role="button"><i :class="icon"></i></span>
      </div>
      <div class="service-content">
        <h2 class="s-title" v-text="title"></h2>
        <p class="s-description text-center" v-text="explanation">
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    props: {
      icon: String,
      title: String,
      explanation: String,
    }
}
</script>
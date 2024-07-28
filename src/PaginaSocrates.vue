<template>
  <div class="container">
    <Title :text="titlePage"/>
    <ImagemSocrates/>
  </div>
</template>

<script>
import ImagemSocrates from './components/ImagemSocrates.vue';

export default {
  name: "PaginaSocrates",
  components: {
    ImagemSocrates
  },
  data() {
    return {
      titlePage: "Tela de início"
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
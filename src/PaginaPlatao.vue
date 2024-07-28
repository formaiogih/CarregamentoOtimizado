<template>
  <div class="container">
    <Title :text="titlePage"/>
    <ImagemPlatao/>
  </div>
</template>

<script>
import ImagemPlatao from './components/ImagemPlatao.vue';

export default {
  name: "PaginaPlatao",
  components: {
    ImagemPlatao
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
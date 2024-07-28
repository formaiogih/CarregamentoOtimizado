<template>
    <div class="container">
      <Title :text="titlePage"/>
      <ImagemAristoteles/>
    </div>
  </template>
  
  <script>
  import ImagemAristoteles from './components/ImagemAristoteles.vue';  
  
  export default {
    name: "PaginaAristoteles",
    components: {
      ImagemAristoteles
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
  
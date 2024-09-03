<template>
    <div class="container">
      <Title :text="titlePage"/>
      <div class="geral"> 
      <div class="grupo">
      <ImagemUm/>
      <ImagemUm/>
      <ImagemUm/>
    </div>
    <div class="grupo">
      <ImagemDois/>
      <ImagemDois/>
      <ImagemDois/>
    </div>
    <div class="grupo">
      <ImagemTres/>
      <ImagemTres/>
      <ImagemTres/>
    </div>
      </div>
      <div class="geral">
    <div class="grupo">
      <ImagemQuatro/>
      <ImagemQuatro/>
      <ImagemQuatro/>
    </div>
    </div>
      <ImagemCinco/>
      <ImagemCinco/>
      <ImagemCinco/>
    </div>
  </template>
  
  <script>
  import ImagemCinco from './components/ImagemCinco.vue';
import ImagemDois from './components/ImagemDois.vue';
import ImagemQuatro from './components/ImagemQuatro.vue';
import ImagemTres from './components/ImagemTres.vue';
import ImagemUm from './components/ImagemUm.vue';
  
  export default {
    name: "PaginaImagens",
    components: {
      ImagemUm,
      ImagemDois,
      ImagemTres,
      ImagemQuatro,
      ImagemCinco
    },
    data() {
      return {
        titlePage: "Tela de início"
      }
    }
  }
  </script>
  
  <style scoped>

  #geral{
    display: flex;
    flex-direction: column;
  }

  #grupo{
    display: flex;
    flex-direction: row;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
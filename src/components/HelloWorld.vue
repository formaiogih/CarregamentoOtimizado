<template>
  <div id="app">
    <article>
      <section class="imgtexto">
        <section id="responsivo">
          <div>
            <button @click="loadAristoteles = true">Carregar Aristoteles</button>
            <img v-if="loadAristoteles" :src="aristotelesImg" alt="Aristoteles">
          </div>
          <div>
            <button @click="loadPlatao = true">Carregar Platão</button>
            <img v-if="loadPlatao" :src="plataoImg" alt="Platão">
          </div>
          <div>
            <button @click="loadSocrates = true">Carregar Sócrates</button>
            <img v-if="loadSocrates" :src="socratesImg" alt="Socrates">
          </div>
        </section>
        <br>
        <TextoImagens/>
        <hr>
        <hr>
      </section>
      
      <section id="textovideo">
        <section class="p" id="video">
          <TextoVideo/>
        </section>
        <VideoUnico/>
      </section>
    </article>
  </div>
</template>

<script>
import TextoImagens from './TextoImagens.vue';
import TextoVideo from './TextoVideo.vue';
import VideoUnico from './VideoUnico.vue';

export default {
  name: 'App',
  components: {
    TextoImagens,
    TextoVideo,
    VideoUnico
  },
  data() {
    return {
      loadAristoteles: false,
      loadPlatao: false,
      loadSocrates: false,
      aristotelesImg: require('../assets/aristoteles.jpeg'),
      plataoImg: require('../assets/platao.png'),
      socratesImg: require('../assets/socrates.jpg')
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  scroll-behavior: smooth;
}

article {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-left: dotted 3px gray;
  border-right: dotted 3px gray;
  border-radius: 10px;
  padding: 10px;
  align-content: center;
  justify-content: center;
}

header {
  text-align: center;
  background-color: rgb(179, 224, 255);
  height: fit-content;
  margin-top: -7px;
  border-radius: 10px;
  border: groove 2px rgb(98, 98, 190);
}

footer {
  text-align: center;
  background-color: rgb(255, 222, 179);
  height: fit-content;
  margin-top: -7px;
  border-radius: 10px;
  border: groove 2px rgb(253, 179, 114);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(224, 86, 0);
}

h1, h3 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(44, 66, 85);
}

h1 {
  margin-bottom: -10px;
}

.imgtexto {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin: 20px;
  flex-wrap: wrap;
}

#responsivo {
  display: flex;
  flex-direction: column;
}

img {
  border-radius: 20px;
}

.p {
  background-color: rgb(255, 254, 188);
  border-radius: 10px;
  border: double 4px rgb(255, 123, 0);
  padding: 10px;
}

#textovideo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
  width: 96%;
}

#video {
  margin-right: 10px;
  width: 47%;
  height: fit-content;
}

iframe {
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: rgb(44, 66, 85);
}

@media (max-width: 1300px) {
  #responsivo {
    display: flex;
    flex-direction: row;
  }

  #video {
    width: 100%;
    margin-right: -10px;
    margin-bottom: 3%;
  }

  #textovideo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-left: -1%;
    height: fit-content;
  }

  iframe {
    width: 102%;
    height: 400px;
  }
}

@media (max-width: 1010px) {
  #textovideo {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
}

@media (max-width: 890px) {
  #responsivo {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  #aristoteles {
    width: 90%;
  }

  .imgs {
    width: 95%;
    height: auto;
  }
}

@media (max-width: 500px) {
  .imgs {
    width: 90%;
  }

  h1 {
    font-size: 180%;
  }
}
</style>

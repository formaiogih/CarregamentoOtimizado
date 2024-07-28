<template>
  <div id="app">
    <HeaderIndex/>
    <header>
      <router-link to="/inicio">Início</router-link>
      <router-link to="/aristoteles">Aristoteles</router-link>
      <router-link to="/platao">Platao</router-link>
      <router-link to="/Socrates">Socrates</router-link>
    </header>
   
    <router-view></router-view>
    
    <FooterIndex/>
  </div>
</template>

<script>
import FooterIndex from './components/FooterIndex.vue';
import HeaderIndex from './components/HeaderIndex.vue';

export default {
  name: 'App',
  components: {
    FooterIndex,
    HeaderIndex
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

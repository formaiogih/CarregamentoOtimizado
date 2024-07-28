<template>
<!DOCTYPE html>
  
    <html lang="pt-br">
    
    <body>
    
            <p>Conheça um pouco mais sobre o legado destes filósofos no vídeo ao lado!</p>
    
    </body>
    
    </html>
  </template>

<script>
export default {
name: 'TextoVideo',
};
</script>

<style scoped>
html{
  scroll-behavior:smooth;
}

article{
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


.p{
  background-color: rgb(255, 254, 188);
  border-radius: 10px;
  border: double 4px rgb(255, 123, 0);
  padding: 10px;
}

#textovideo{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
  width: 96%;
}

@media (max-width: 1300px) {
  #textovideo{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      margin-left: -1%;
      height: fit-content;
  }

  iframe{
      width: 102%;
      height: 400px;
  }
}

@media (max-width: 1010px) {
  #textovideo{
      display: flex;
      flex-direction: column;
      align-content: center;
  }
}

@media (max-width: 500px){

  h1{
      font-size: 180%;
  }
}

</style>
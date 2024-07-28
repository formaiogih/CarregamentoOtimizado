<template>
<!DOCTYPE html>
  
    <html lang="pt-br">
    
    <body>
    
      <section class="p">
        <p>Imagem 1: Aristóteles</p>
        <p>Imagem 2: Platão</p>
        <p>Imagem 3: Sócrates</p>
    </section>
    
    </body>
    
    </html>
  </template>

<script>
export default {
name: 'TextoImagens',
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

</style>
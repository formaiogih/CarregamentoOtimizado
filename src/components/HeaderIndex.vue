<template>
<!DOCTYPE html>
  
    <html lang="pt-br">
    
    <body>
    
      <header>
        <h1>IMPORTANTES FILÓSOFOS</h1>
        <h3><a href="#textovideo">E seus legados</a></h3>
    </header>
    
    </body>
    
    </html>
  </template>

<script>
export default {
name: 'HeaderIndex',
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

header{
  text-align: center;
  text-justify: center;
  background-color: rgb(179, 224, 255);
  height: fit-content;
  margin-top: -7px;
  border-radius: 10px;
  border: groove 2px rgb(98, 98, 190);
}

h1, h3{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(44, 66, 85);
}

h1{
  margin-bottom: -10px;
}

a{
  text-decoration: none;
  color: rgb(44, 66, 85);

}

@media (max-width: 500px){
  h1{
      font-size: 180%;
  }
}

</style>
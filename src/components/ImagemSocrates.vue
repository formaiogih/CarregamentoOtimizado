<template>
    <!DOCTYPE html>
  
    <html lang="pt-br">
    <body>
    

                <section id="responsivo">    
                  <img src="../assets/socrates.jpg" alt="Socrates">
                </section>
    </body>
    </html>
  </template>
  
  <script>
  export default {
  name: 'ImagemSocrates',
  };
  </script>
  
  <style scoped>
  
  #responsivo {
    display: flex;
    flex-direction: column;
  }
  
  img {
    border-radius: 20px;
  }
  
  iframe{
    border-radius: 20px;
  }

  @media (max-width: 1300px) {
    #responsivo {
        display: flex;
        flex-direction: row;
    }
  
    iframe{
        width: 102%;
        height: 400px;
    }
  }
  
  @media (max-width: 890px) {
    #responsivo {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
  
    .imgs{
        width: 95%;
        height: auto;
    }
    
  }
  
  @media (max-width: 500px){
    .imgs{
        width: 90%;
    }
  }
  
  </style>
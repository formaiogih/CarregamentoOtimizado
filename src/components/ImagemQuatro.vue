<template>
    <!DOCTYPE html>
  
    <html lang="pt-br">
        <body>
    
                <section id="responsivo">
                  <img src="../assets/img4.jpg"  loading= “lazy” alt="Grande árvore, cheia de longos galhos, em uma floresta coberta por vegetação verde">
                </section>

    </body>
    
    </html>
  </template>
  
  <script>
  export default {
  name: 'ImagemQuatro'
  };

  </script>

    <style>
    
  #responsivo {
    display: flex;
    flex-direction: column;
  }
  
  img {
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
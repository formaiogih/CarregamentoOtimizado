<template>
    <!DOCTYPE html>
  
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/index.css" />
    
    </head>
    
    <body>
        <footer>
            <p>Site feito por: Giovanna Formaio Reis</p>
            <p>Professor: Wagner Simões Santos</p>
            <p>Turma: IIW2022B</p>
        </footer>
    </body>
    
    </html>
  </template>
  
  <script>
  export default {
  name: 'FooterIndex',
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
  
  footer{
    text-align: center;
    text-justify: center;
    background-color: rgb(255, 222, 179);
    height: fit-content;
    margin-top: -7px;
    border-radius: 10px;
    border: groove 2px rgb(253, 179, 114);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(224, 86, 0);
  }
  .p{
    background-color: rgb(255, 254, 188);
    border-radius: 10px;
    border: double 4px rgb(255, 123, 0);
    padding: 10px;
  }
  
  a{
    text-decoration: none;
    color: rgb(44, 66, 85);
  }
  
  </style>
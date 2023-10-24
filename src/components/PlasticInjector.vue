<template>
    <div class="main-page">
      <div class="content">
        <div id="app">
          <router-view />
        </div>
        <div class="whole">

          <div class="content-container">
            <div class="big-box">
                <h1 class="projectitle">Low-Tech injection press</h1>
                <p class="introduction">This project focuses on ways to recycle plastic waste into objects without industrial means. Two levels
of technique are explored. The first one is plastic melting and pouring, it is described as a technique for
beginners who wish to create recycled plastic objects at home without having to buy expensive material.
In this first section, the goal is to make simple shapes of plastic using a panini machine to heat the matter
and fabricate molds with resin and plaster to form it into shapes.
The second part of this technological expedition go through more advanced fabrication techniques. The
final goal is still to melt plastic into shapes but the expectations for the quality of finish is higher. To do
that, this document describes the protocol to fabricate a mechanical plastic injector. This injector is
meant to create pressure in the mold when pouring plastic to force the matter into agglomerating and
moving air bubbles out.
These two phases share the same purpose such as making recycled-plastic melting and forming
accessible for individuals, but they differ on the level of involvement required and, on the finish
expected.</p>

            </div>
          </div>
          <div class="photo-container">
                <img src="../assets/thumbnail_IMG_1945.jpg" alt="My Photo" class="photo">
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  export default {
    props: ['projectTitle']
  }
  </script>
  
  <style scoped>
  .main-page {
    background-color: white;
    text-align: center;
    padding: 20px 10px;
  }
  
  #app {
    font-family:'Calibri','Fallback-Font', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .whole{
    display: flex;
    flex-direction: raw;
  }
  
  .introduction {
    font-family: 'Calibri', 'Fallback-Font', sans-serif;
    font-size:large;
  }
  .green-bar {
    background-color: green;
    height: 50px; /* Adjust the height as needed */
    width: 100%;
    position: fixed; /* Fixed position to stay at the top */
    top: 0;
    left: 0;
    z-index: 999; /* Set a high z-index to ensure it's above other content */
  }
  
  
  .aboutme {
  
    padding: 20px;
    color: darkgreen;
    border-radius: 5px;
    text-align: left;
    margin-top: 30px;
    width:100%;
  }
  .content-container {
    display: flex;
    flex-direction: column; /* Arrange columns horizontally */
    width:800px;
    
  }
  
  
  .photo-container {
    width: 350px;
    height: 365px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgb(157, 201, 157);
    border-radius: 5px;
    margin-top: 80px;
    margin-left:80px;
  }
  
  
  .big-box {
    background-color: rgb(201, 246, 193);
    padding: 20px;
    color: darkgreen;
    border-radius: 5px;
    text-align: left;
    margin-top: 30px;
  }
  
  .photo {
    /* The image will be scaled proportionally to fit the container */
    width: 300 px;
    height: 300px;
    
    
  }
  </style>
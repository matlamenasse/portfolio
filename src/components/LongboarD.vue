<template>
    <div class="main-page">
      <div class="content">
        <div id="app">
          <router-view />
        </div>
        <div class="whole">
          <div class="content-container">
            <div class="big-box">
                <h1 class="projectitle">Bio-composite Longboard</h1>
                <p class="introduction"> Environmental consciousness has evolved around the world these past ten years. This phenomenon isobservable in riding sports as practitioners try to pollute less by buying environmentally-friendly
products and brands try to reduce their carbon-footprint.
Natural fibers have excellent mechanical properties. Their affordable price and low carbon footprint
question the legitimacy of polluting artificial fibers like carbon and glass fibers being the best for
reinforcement.
The goal of this innovation project is to produce environmentally friendly boards, giving a special focus
on the choice of fiber for reinforcement. Indeed, this project is a search on the applicability of natural
fibers as reinforcement for boards of any kind.
Most of the boards from the riding sports have a similar construction: wakeboards, kiteboards,
longboard, skis, and snowboards are made of a compressed layered composite often composed of a
wooden core reinforced with fibers on top and under. Therefore, the work is focused on the making of
longboards, but the experiments can be extended to the whole board-making industry. </p>

            </div>
          </div>
          <div class="photo-container">
                <img src="../assets/Photo.png" alt="My Photo" class="photo">
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
    width: 270px;
    height: 295px;
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
    width: 220px;
    height: 250px;
    
    
  }
  </style>
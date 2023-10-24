<template>
    <div class="main-page">
      <div class="content">
        <div id="app">
          <router-view />
        </div>
        <div class="whole">
          <div class="content-container">
            <div class="big-box">
                <h1 class="projectitle">The InHome Garden</h1>
                <p class="introduction">This project involves designing, prototyping, producing, and selling a product on Kickstarter, a
crowdfunding platform.
Our idea was to create an equipment which would allow to perform vertical culture at home, to be
able to have many plants in a small space. We wanted our product to be modular: if the user buys
several of our product, they must be stackable to form a bigger structure. Because it is meant to be
inside a house or an appartement, it has to be decorative as well and integer aesthetic shapes and
colors.
We came up with the InHome Forest, made of triangular sandstone ceramic pots stackable with
aluminum sticks. The product comes with different size of aluminum sticks and allow the user to use
his creativity to shape it as he wants.</p>

            </div>
          </div>
          <div class="photo-container">
                <img src="../assets/ihg.png" alt="My Photo" class="photo">
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
    width: 330px;
    height: 265px;
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
    width: 300px;
    height: 240px;
    
    
  }
  </style>
<template>
  <div class="main-page">
    <div class="content">
      <div id="app">
        <router-view />
      </div>
      <div class="whole">
        <div class="content-container">
          <div class="big-box">
              <h1 class="projectitle">{{ projectTitle }}</h1>
              <p class="introduction">{{ projectText }}</p>
          </div>
        </div>
        <div class="photo-container">
              <img src="../assets/oim.png" alt="My Photo" class="photo">
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
  width: 200px;
  height: 270px;
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
  width: 170px;
  height: 240px;
  
  
}
</style>
<template>
  <header>
    <div class="top_bar">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/">Home</router-link></li>
        <li class="nav-item"><router-link to="/Longboard">Bio-composite longboard</router-link></li>
        <li class="nav-item"><router-link to="/InjectionPress">Low-tech plastic injection press</router-link></li>
        <li class="nav-item"><router-link to="/InHomeGarden">The InHome Garden</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style>
.nav-list {
  list-style: none;
  display: flex;
  flex-direction:row;
  align-items: center;
  padding: 0; /* Remove default padding for list */
}

.top_bar {
  background-color: rgb(122, 210, 122);
  display: flex;
  align-items: center;
  height: 120px; 
  width: 100%;
  position: fixed; /* Fixed position to stay at the top */
  top: 0;
  left: 0;
  z-index: 999;
}

.nav-item {
  background-color: rgb(40, 185, 40);
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-family:'Calibri','Fallback-Font', sans-serif;
  font-size: large;
  margin-top: 0;
  margin-bottom: 0;
  margin-right:15px;
  margin-left:15px;
}

.nav-item router-link {
  text-decoration: none;
  color: white;
}

/* Add any other styling as needed */
</style>
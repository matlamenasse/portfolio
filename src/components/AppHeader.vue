<template>
  <header>
    <div class="top_bar">
      <ul class="nav-list">
        <li class="nav-item"><a href="/" exact>Home</a></li>
        <li class="nav-item"><a href="/Longboard">Bio-composite longboard</a></li>
        <li class="nav-item"><a href="/Low-Tech press" exact>Low-tech plastic injection press</a></li>
        <li class="nav-item"><a href="/The InHome Garden" exact>The InHome Garden</a></li>
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
  background-color: rgb(28, 121, 28);
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

.nav-item a {
  text-decoration: none;
  color: white;
}

/* Add any other styling as needed */
</style>
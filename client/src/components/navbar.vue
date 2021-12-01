<!--navbar example -->
<template>
  <b-navbar toggleable="lg" type="dark" variant="">
    <router-link to="/home"><b-img :src="require('../assets/logo.png')"></b-img></router-link>
  </b-navbar>
</template>

<style scoped>
button {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    border-radius: 8px;
    width: 45%;

}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: gray;
    color: white;
}

img {
    background: url('/assets/logo.png');
    width: 20%;
    height: auto;
    text-align: left;
    margin-left:1%;
}
nav {
    background: gray;
}
</style>

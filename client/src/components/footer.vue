<!--footer example-->
<template>
  <div id= "info">
    <router-link class="Link" to="/about">About</router-link> |
    <router-link class="Link" to="/contact">Contact</router-link>
  </div>
</template>

<style scoped>
#info{
    background-color: gray;
    width: 100%;
    height: 100%;
    padding:20px;
}
.Link {
    color: black;
}
</style>

<template>
  <div>
    <h1> Your coordinates:</h1>
    <p>{{ coordinates.lat}} Latitude, {{coordinates.lng}} Longitude</p>
    <GmapMap
        :center="{lat:11.965216102046611, lng:57.70635929297478}"
        :zoom= "7"
        style= "width:100%;  height:360px;"></GmapMap>

  </div>
</template>
<script>

export default {
  data() {
       return{
         coordinates: {
           lat: 0, 
           lng: 0
         }

       }
  },
  created(){
    this.$getLocation({})
        .then(coordinates => {
          this.coordinates = coordinates;
        });

  }
}
</script>

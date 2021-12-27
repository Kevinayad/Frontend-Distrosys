<template>
  <div>
    <h1> Your coordinates:</h1>
    <p>{{ coordinates.lat}} Latitude, {{coordinates.lng}} Longitude</p>
     <!-- <GmapAutocomplete
        @place_changed='setPlace'
      /> -->
    <button @click= "showClinics">Show clinics</button>
    <gmap-map
        :center= "center"
        :zoom= "7"
        style= "width:100%;  height:600px;">
        <gmap-marker
          :key="index"
          v-for="(gmp, index) in dentists"
          :position="gmp"
          @click="center=gmp"
          @mouseover="displayLabel"
        ></gmap-marker>
    </gmap-map>
  </div>
</template>
<script>
const currentLocation = {lat: 59.8757264, lng: 17.65862};
import dentists from "../../public/assets/dentistRegistry.json"


export default {
  name: 'GoogleMap',
  data() {
       return{
         coordinates: {
           lat: 0, 
           lng: 0
         },
         center: { lat: 57.70635929297478, lng: 11.965216102046611},
         currentPlace: null,
         dentists: [],
         markers: [],
         places: [],
       }
  },
   mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });

      this.dentists = [
          {
              lat: 57.707619,
              lng: 11.969388,
              label: 'Your Dentist'
          },
          {
              lat: 57.685255,
              lng: 11.942625,
              label: '"Tooth Fairy Dentist'
          },
          {
              lat: 57.709872,
              lng: 11.940386,
              label: 'The Crown'
          },
          {
              lat: 57.694723,
              lng: 11.991153,
              label: 'Lisebergs Dentists'
          }
      ];
 
    },
    showClinics(){
      this.markers= [
        {
          position: currentLocation,
      }
      ]
    }
    }
  }
</script>

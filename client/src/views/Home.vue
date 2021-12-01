<template>
  <div class="home">
    <navbar/>
    <MapboxMap/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapboxMap from '@/components/map.vue'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import navbar from '../components/navbar.vue'
// import VueMeetingSelector from 'vue-meeting-selector'

export default {
  name: 'Home',
  components: {
    MapboxMap,
    navbar// ,
    // VueMeetingSelector
  }
}
</script>

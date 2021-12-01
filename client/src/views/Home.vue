<template>
  <div class="home">
    <MapboxMap/>

  </div>
</template>

<script>
// @ is an alias to /src
import MapboxMap from '@/components/map.vue'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

export default {
  name: 'Home',
  components: {
    MapboxMap
  }
}
</script>

<template>
  <div class="home">
    <h1>Book your dentist appointment by choosing a clinic on the map</h1>
    <Map/>
    <Schedule/>
  </div>
</template>

<script>
import Map from '../components/map.vue'
import Navbar from '../components/navbar.vue'
import Schedule from '../components/schedule.vue'

export default {
  name: 'Home',
  components: {
    Schedule,
    Map,
    Navbar
  }
}
</script>

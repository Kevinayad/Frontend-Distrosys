<!--schedule is imported and loaded in this view-->
<template>
  <div>
    <navbar/>
    <schedule/>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import schedule from '../components/schedule.vue'
export default {
  components: { schedule, navbar },
  setup () {

  }
}
</script>

<template>
  <div class="simple-example">
    <vue-meeting-selector
      class="simple-example__meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      @next-date="nextDate"
      @previous-date="previousDate"
    />
    <p>meeting Selected: {{ meeting ? meeting : 'No Meeting selected' }}</p>
  </div>
</template>

<script>
import mqtt from "mqtt";
import VueMeetingSelector from 'vue-meeting-selector';
//TODO: remove once connect schedule to backend is completed
import data from '../../public/assets/data.json'

export default {
  name: 'SimpleExample',
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: null,
      loading: true,
      nbDaysToDisplay: 5,
      clinic1: null,
      connection: {
        host: 'broker.emqx.io',
        port: 8083,
        endpoint: '/mqtt',
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 4000,
        clientId: 'emqx_cloudf7693719',
        username: 'group12',
        password: '12',
      },
      subscription: {
        topic: 'Backend',
        qos: 2,
      },
    };
  },
  computed: {
    // because of line-height, font-type you might need to change top value
    classNames() {
      return {
        tabLoading: 'loading-div',
      };
    },
  },
  mounted() {
      this.createConnection();
  },
  methods: {
    // @click on button-right
    async nextDate() {
      // display loading
      this.loading = true;
      // calcul new Date and change actual
      this.date = newDate;
      // get meetings with async function
      this.meetingsDays = await getNewDates(this.date);
      // hide loading
      this.loading = false;
    },
    // @click on button-left
    async previousDate() {
      // display loading
      this.loading = true;
      // calcul new Date and change actual
      // you might need to handle the fact you can't go in past
      this.date = newDate;
      // get meetings with async function
      this.meetingsDays = await getNewDates(this.date);
      // hide loading
      this.loading = false;
    },
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        this.doSubscribe()
        console.log('Connection succeeded!')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        if(topic=='Backend'){
          //load schedule TODO: remove clinic1
          this.clinic1 = (JSON.parse(message))['Clinic1']
          this.meetingsDays= this.clinic1;
          this.loading = false;
          console.log(`Received message ${message} from topic ${topic}`)
        }
      })
    },
    doSubscribe() {
      const { topic, qos } = this.subscription
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
  },
  //TODO: remove once connect schedule to backend is completed
  async created() {
    // get meetings
    //this.meetingsDays= this.clinic1;
    //this.meetingsDays = await getNewDates(this.date);
    // hide loading
    //this.loading = false;
  },
};
</script>

<style scoped lang="scss">
  .simple-example {
   margin-top: 5em;
   margin-left: 2em;
    margin-right: 2em;
   margin-bottom: 5em;

//   &__meeting-selector {
//     max-width: 700px;
 }
// }
// // since our scss is scoped we need to use ::v-deep
// ::v-deep .loading-div {
//   top: 58px!important; 
//}
</style>
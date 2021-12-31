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
        ></gmap-marker>
    </gmap-map>
  </div>
</template>
<script>
const currentLocation = {lat: 59.8757264, lng: 17.65862};
import mqtt from "mqtt";

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
          //mqtt 

          connection: {
          host: 'r2c46b52.eu-central-1.emqx.cloud',
          port: 8083,
          endpoint: '/mqtt',
          clean: true, // Reserved session
          connectTimeout: 4000, // Time out
          reconnectPeriod: 4000, // Reconnection interval
          // Certification Information
          clientId: 'emqx_cloudf7693719',
          username: 'test',                                 // replace this
          password: '12',
        },
        subscription: {
          topic: 'topic/map',
          qos: 0,
        },
        publish: {
          topic: 'topic/map',
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
        },
        receiveNews: '',
        qosList: [
          { label: 0, value: 0 },
          { label: 1, value: 1 },
          { label: 2, value: 2 },
        ],
        client: {
          connected: false,
        },
        subscribeSuccess: false,
      

       }
  },
   mounted() {
    this.geolocate();
    this.createConnection();
    this.getClinics();
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
    },

//source: https://www.emqx.com/en/blog/how-to-use-mqtt-in-vue
    createConnection() {
      console.log('connecting mqtt')
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        console.log(`Received message ${message} from topic ${topic}`)
      })
    },
    getClinics() {
      this.doSubscribe("frontend/allClinics");
      console.log("getting all clinics");
      this.client.on("message", (topic, message) => {
        if (topic == "allClinics") {
          var string = message.toString();
          var json = JSON.parse(string);
          this.clinics = json;
          console.log(json);
        }
      });
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
  doUnSubscribe() {
  const { topic } = this.subscription
  this.client.unsubscribe(topic, error => {
    if (error) {
      console.log('Unsubscribe error', error)
    }
  })
},
doPublish() {
  const { topic, qos, payload } = this.publication
  this.client.publish(topic, payload, qos, error => {
    if (error) {
      console.log('Publish error', error)
    }
  })
},
destroyConnection() {
  if (this.client.connected) {
    try {
      this.client.end()
      this.client = {
        connected: false,
      }
      console.log('Successfully disconnected!')
    } catch (error) {
      console.log('Disconnect failed', error.toString())
    }
  }
},



    }
  }
</script>

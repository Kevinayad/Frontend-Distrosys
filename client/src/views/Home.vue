<template>
  <div class="home">
            <!-- About-->
        <section class="page-section bg-white" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
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
                   <hr class="divider" />
                   
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5"></p>
                        <button class="btn btn-primary btn-xl" @click="scrollMeTo('schedule'); doPublish('Frontend', 'Clinic1')" :disabled="check" id="continue">{{connected}}</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services-->
        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Acute Dental</h3>
                            <p class="text-muted mb-0">Extreme toothache, damaged tooth etc</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Dental Check-up</h3>
                            <p class="text-muted mb-0">x-rays and examination of teeth and gums</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Dental Hygienist</h3>
                            <p class="text-muted mb-0">Tartar removal and preventative dental care</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">General Dentist</h3>
                            <p class="text-muted mb-0">All kinds of treatments</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="divider" />
        </section>
        <!-- Call to action-->
        <section class="page-section bg-white text-black" ref="schedule">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mt-0">Choose an available time</h2>                       
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
    <p>meeting Selected: {{ meeting ? meeting : 'No Meeting selected' }}</p>
                <button class="btn btn-primary btn-xl" @click="scrollMeTo('contact')" id="confirm" :disabled="check">{{confirmed}}</button>
            </div>
        </section>
        <!-- Contact-->
        <section class="page-section" ref="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Please Enter your personal information</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Your personal information is only used to contact you back if needed!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="form-message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <label for="form-message">Additional information about the reason you want to meet the dentist (optional)</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+46 0000000000000</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - Group 12</div></div>
        </footer>

  </div>
</template>

<script>
import mqtt from 'mqtt'
//import Map from '../components/map.vue'
import Navbar from '../components/navbar.vue'
import VueMeetingSelector from 'vue-meeting-selector';
//import Schedule from '../components/schedule.vue'
import '../../public/css/styles.css'
const currentLocation = {lat: 59.8757264, lng: 17.65862};

export default {
  name: 'Home',
  components: {
    //Schedule,
    //Map,
    Navbar,
    VueMeetingSelector
  },
  data() {
      return {
          //MQTT
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
      subscriptionWillMsg: {
        topic: 'WillMsg12',
        qos: 2,
      },
      subscriptionBackend: {
        topic: 'Backend',
        qos: 2,
      },
      subscriptionMap: {
        topic: 'Map',
        qos: 2,
      },
      check: false,
      connected: 'Continue',
      confirmed: 'Confirm',
      //Map
      coordinates: {
           lat: 0, 
           lng: 0
         },
    center: { lat: 57.70635929297478, lng: 11.965216102046611},
         currentPlace: null,
         dentists: [],
         markers: [],
         places: [],
        //Schedule 
         date: new Date(),
      meetingsDays: [],
      meeting: null,
      loading: true,
      nbDaysToDisplay: 5,
      selectedClinic: null,
      }
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
      this.geolocate();
      this.createConnection();
      this.getClinics();
  },
  methods: {
      //MQTT
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
        if(topic=='WillMsg12'){
          window.alert(message);
          this.check = true;
          this.connected = 'No connection';
          this.confirmed = 'Unable to confirm time';
        }
        else if(topic == 'Backend'){
          //load schedule
          console.log(this.selectedClinic);
          this.meetingsDays= (JSON.parse(message))[this.selectedClinic];
          this.loading = false;
        }
        console.log(`Received message ${message} from topic ${topic}`)
      })
    },
    doSubscribe() {
      var { topic, qos } = this.subscriptionWillMsg
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
      var { topic, qos } = this.subscriptionMap
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
      var { topic, qos } = this.subscriptionBackend
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
    doPublish(topic, payload) {
      this.client.publish(topic, payload, 2, error => {
          //TODO: check if movable
          //replace with this.selectedClinic = 'Clinic1' to test schedule-fixes branch.
          //and replace the message on line 30 'Clinic1' to 'GetSchedule'.
          this.selectedClinic = payload
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
    //Map
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
    //Schedule
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
    //Other
    scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;
    window.scrollTo(0, top);
    },
  },
}
</script>

<style scoped lang="scss">
  .simple-example {
   margin-top: 5em;
   margin-left: 2em;
    margin-right: 2em;
   margin-bottom: 5em;
   }
</style>

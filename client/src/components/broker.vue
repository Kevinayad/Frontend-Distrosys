<script>
const mqtt = require("mqtt");
const topics = require("../../../broker/topics.js");
const willMsgTopic = topics.willMsgTopic;
const localHost = 'mqtt://127.0.0.1'; // Local host
const remoteHost = ''; // Remote host

// Change the value of host to the host in use.
const host = localHost;

const port = ':1883';

const options = {
    keepalive: 60,
	protocolId: 'MQTT',
	protocolVersion: 4,
	clean: true,
	reconnectPeriod: 1000,
	connectTimeout: 30 * 1000,
	will: {
		topic: 'WillMsg',
		payload: 'Connection Closed abnormally..!',
		qos: 1,
		retain: false
	},
    hostURL: (host+port)
}

const client = mqtt.connect(options.hostURL, options);

client.on("connect", function() {
    console.log("S");
    const GUITopic= topics.frontendTopic;

    function subscribe(topic) {
        client.subscribe(topic);
        console.log("Subscribed to: " + topic);
    }
    
    function publish(topic, message) {
        client.publish(topic, message, { qos: 1, retain:false });
    }
    subscribe(willMsgTopic);
    //subscribe(GUITopic);

    //publish(GUITopic, 'User request: ...');
})

client.on('message', function(topic,message) {
    if(topic == willMsgTopic){
        window.alert("connection error, functions limited.")
    }
    console.log(message.toString());
})

</script>
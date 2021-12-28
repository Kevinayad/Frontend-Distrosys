const mqtt = require("mqtt");
const topics = require("./topics");
const willMsgTopic = topics.willMsgTopic;
const frontendTopic = topics.frontendTopic;
const backendTopic = topics.backendTopic;
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


    subscribe(backendTopic);
    //TODO: Remove dummy data before merge!
    var message = {
        "userid": 646464,
        "requestid": 13,
        "dentistid": 1,
        "issuance": 1602406766314,
        "date": "2020-12-14"
    };
    var appointment = JSON.stringify(message);
    publish(frontendTopic, appointment);
})

client.on('message', function(topic,message) {
    //[IN PROGRESS*]
    if (topic == willMsgTopic){
        sendMessage(message);
    }
    //[*IN PROGRESS]
    console.log(message.toString());
})
//[IN PROGRESS*]
function sendMessage(mess) {
    return 'Message';
}
//[*IN PROGRESS]

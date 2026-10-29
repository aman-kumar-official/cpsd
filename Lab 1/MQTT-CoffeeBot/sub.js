var mqtt = require('mqtt')

var options = {
    host: "f18218ea265145ff994b464c4a8d86cb.s1.eu.hivemq.cloud",
    port: 8883,
    protocol: "mqtts",
    username: "amansingh",
    password: "Aman@8409"
};

var client = mqtt.connect(options);
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    console.log('Received message:', topic, message.toString());
});

client.subscribe('my/test/topic');
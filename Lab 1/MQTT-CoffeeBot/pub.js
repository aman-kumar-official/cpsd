const mqtt = require("mqtt");
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
setInterval(function () {
var random1 = Math.random()*50;
console.log(random1);
if (random1 < 30)
client.publish('my/test/topic', 'Simple MQTT using HiveMQ: ' + random1.toString());
}),30000;
});

client.on('error', function (error) {
    console.log(error);
});
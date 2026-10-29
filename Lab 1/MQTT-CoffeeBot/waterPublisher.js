const mqtt = require("mqtt");

const options = {
    host: "f18218ea265145ff994b464c4a8d86cb.s1.eu.hivemq.cloud",
    port: 8883,
    protocol: "mqtts",
    username: "amansingh",
    password: "Aman@8409"
};

const client = mqtt.connect(options);

client.on("connect", () => {

    console.log("Water Publisher Connected");

    setInterval(() => {

        let water = Math.floor(Math.random() * 41) + 20;

        console.log("Publishing Water :", water);

        client.publish("Water", water.toString());

    }, 5000);

});
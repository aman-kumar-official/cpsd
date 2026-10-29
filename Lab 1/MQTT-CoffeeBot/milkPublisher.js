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
    console.log("Milk Publisher Connected");

    setInterval(() => {

        let milk = Math.floor(Math.random() * 51) + 30; //30-80%

        console.log("Publishing Milk :", milk);

        client.publish("Milk", milk.toString());

    }, 5000);
});
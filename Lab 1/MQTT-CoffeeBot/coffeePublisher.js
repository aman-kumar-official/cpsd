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

    console.log("Coffee Publisher Connected");

    setInterval(() => {

        let coffee = Math.floor(Math.random() * 81) + 20;

        console.log("Publishing Coffee :", coffee);

        client.publish("Coffee", coffee.toString());

    }, 5000);

});
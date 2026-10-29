const mqtt = require("mqtt");

const options = {
    host: "f18218ea265145ff994b464c4a8d86cb.s1.eu.hivemq.cloud",
    port: 8883,
    protocol: "mqtts",
    username: "amansingh",
    password: "Aman@8409"
};

const client = mqtt.connect(options);

let milk = 0;
let coffee = 0;
let water = 0;

client.on("connect", () => {

    console.log("Subscriber Connected");

    client.subscribe("Milk");
    client.subscribe("Coffee");
    client.subscribe("Water");

});

client.on("message", (topic, message) => {

    const value = parseInt(message.toString());

    if (topic === "Milk")
        milk = value;

    if (topic === "Coffee")
        coffee = value;

    if (topic === "Water")
        water = value;

    console.clear();

    console.log("Milk   :", milk + "%");
    console.log("Coffee :", coffee + "%");
    console.log("Water  :", water + "%");

    console.log("-------------------------");

    // Decision Logic

    if (coffee >= 60 && milk <= 30) {
        console.log("☕ Espresso Prepared");
    }
    else if (milk >= 60 && coffee >= 30 && water <= 30) {
        console.log("☕ Cappuccino Prepared");
    }
    else if (milk >= 40 && coffee >= 40 && water >= 20) {
        console.log("☕ Mochaccino Prepared");
    }
    else {
        console.log("Waiting for suitable ingredient percentages...");
    }

});
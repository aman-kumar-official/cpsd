var coap = require('coap');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var portNumber = 5683;

coap.createServer(function (req, res) {

    console.log("Request Received:", req.url);

    if (req.headers['Accept'] != 'application/json') {
        res.code = '4.06';
        return res.end();
    }

    switch (req.url) {

        case "/co":
            displayOutput(res, {
                Parameter: "Carbon Monoxide (CO)",
                Unit: "ppm",
                SafeRange: "0-9",
                Value: randomInt(0, 9)
            });
            break;

        case "/co2":
            displayOutput(res, {
                Parameter: "Carbon Dioxide (CO2)",
                Unit: "ppm",
                SafeRange: "400-1000",
                Value: randomInt(400, 1000)
            });
            break;

        case "/nox":
            displayOutput(res, {
                Parameter: "Nitrogen Oxides (NOx)",
                Unit: "ppb",
                SafeRange: "0-53",
                Value: randomInt(0, 53)
            });
            break;

        case "/pm":
            displayOutput(res, {
                Parameter: "Particulate Matter (PM2.5)",
                Unit: "µg/m³",
                SafeRange: "0-35",
                Value: randomInt(0, 35)
            });
            break;

        case "/hc":
            displayOutput(res, {
                Parameter: "Hydrocarbons (HC)",
                Unit: "ppm",
                SafeRange: "0-160",
                Value: randomInt(0, 160)
            });
            break;

        default:
            res.code = '4.04';
            res.end("Invalid Resource");
    }

}).listen(portNumber);

console.log("CoAP Server Started on Port 5683");

function displayOutput(res, content) {

    res.setOption('Content-Format', 'application/json');
    res.code = '2.05';
    res.end(JSON.stringify(content, null, 2));

}
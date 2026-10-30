const coap = require("coap");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const portNumber = 5683;

const server = coap.createServer((req, res) => {
  console.log("Request received:", req.url);

  if (req.headers["Accept"] !== "application/json") {
    res.code = "4.06";
    return res.end();
  }

  let content;

  switch (req.url) {
    case "/co":
      content = {
        Parameter: "Carbon Monoxide (CO)",
        Unit: "ppm",
        SafeRange: "0-9",
        Value: randomInt(0, 9),
      };
      break;

    case "/co2":
      content = {
        Parameter: "Carbon Dioxide (CO2)",
        Unit: "ppm",
        SafeRange: "400-1000",
        Value: randomInt(400, 1000),
      };
      break;

    case "/nox":
      content = {
        Parameter: "Nitrogen Oxides (NOx)",
        Unit: "ppb",
        SafeRange: "0-53",
        Value: randomInt(0, 53),
      };
      break;

    case "/pm":
      content = {
        Parameter: "Particulate Matter (PM2.5)",
        Unit: "µg/m³",
        SafeRange: "0-35",
        Value: randomInt(0, 35),
      };
      break;

    case "/hc":
      content = {
        Parameter: "Hydrocarbons (HC)",
        Unit: "ppm",
        SafeRange: "0-160",
        Value: randomInt(0, 160),
      };
      break;

    default:
      res.code = "4.04";
      return res.end("Invalid Resource");
  }

  res.setOption("Content-Format", "application/json");
  res.code = "2.05";
  res.end(JSON.stringify(content, null, 2));
});

server.listen(portNumber, "127.0.0.1", () => {
  console.log(`CoAP server running at coap://localhost:${portNumber}`);
});

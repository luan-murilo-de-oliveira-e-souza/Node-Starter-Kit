const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "Luan", region: "north-west" },
  { name: "Leila", region: "north-west" },
  { name: "Mohammed", region: "north-west" },
  { name: "Azin", region: "london" },
  { name: "Chioma", region: "london" },
];

app.get("/", function (request, response) {
  console.log("hello world, you've reached my API");
  //   response.send("Hello world, you're getting a response from my server!");
});

app.get("/trainees", function (request, response) {
  //   console.log(request.query.region, "<--- request.query.region");
  console.log("Received a request to the /trainees endpoint");
  response.send({ trainees });
});

app.listen(port, function () {
  console.log("my application is now listening on port 9090...");
});

const { application } = require("express");
const express = require("express");
const app = express();
const port = 9090;

//Week 1

// const trainees = [
//   { name: "Luan", region: "north-west" },
//   { name: "Leila", region: "north-west" },
//   { name: "Mohammed", region: "north-west" },
//   { name: "Azin", region: "london" },
//   { name: "Chioma", region: "london" },
// ];

// app.get("/", function (req, res) {
//   console.log("hello world, you've reached my API");
//   //   res.send("Hello world, you're getting a response from my server!");
// });

// app.get("/trainees", function (req, res) {
//   //   console.log(req.query.region, "<--- req.query.region");
//   console.log("Received a req to the /trainees endpoint");
//   res.send({ trainees });
// });

// app.listen(port, function () {
//   console.log("my application is now listening on port 9090...");
// });

//Week 2

app.use(express.json()); //<-- need this to access request body

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/", function (req, res) {
  res.status(200).send("Welcome to my movie API");
});

app.get("/albums", function (req, res) {
  res.status(200).send({ albumsData });
});

app.get("/albums/:albumId", function (req, res) {
  const idToFind = req.params.albumId;
  const album = albumsData.find((album) => album.albumId === idToFind);
  res.status(200).send({ album });
});

app.post("/albums", function (req, res) {
  // console.log(req.body, "<--- this is the data the client sent over!");
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.status(201).send({ newAlbum });
});

app.listen(port, function () {});

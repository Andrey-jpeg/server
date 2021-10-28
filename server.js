var cors = require('cors')
const app = require("express")();
app.use(cors());
const port = 3000;

app.listen(process.env.PORT || port, () => console.log(`sever is running on port ${port}`));

const songs = [
  {
    id: 1,
    name: "100 miles",
    artist: "Skinbone",
    genre: "HipHop",
    albumCoverUrl:
      "https://i1.sndcdn.com/artworks-000633561964-409g0f-t500x500.jpg",
    songUrl: "./songs/100-Miles.mp3",
  },
  {
    id: 2,
    name: "ass clap",
    artist: "Van",
    genre: "Gachi",
    albumCoverUrl:
      "https://i1.sndcdn.com/artworks-9Gt2zdNpPfaUqrl0-kGZ9VQ-t500x500.jpg",
    songUrl: "./songs/ass-clap.mp3",
  },
  {
    id: 3,
    name: "Fisk til mig",
    artist: "Galaxybois",
    genre: "DanishPop",
    albumCoverUrl: "https://i.ytimg.com/vi/4R8SPzu7NcU/maxresdefault.jpg",
    songUrl: "./songs/fisk-til-mig.mp3",
  },
  {
    id: 4,
    name: "Min kan den danser tango remix",
    artist: "STAMPE",
    genre: "Electronic",
    albumCoverUrl:
      "https://i.ytimg.com/vi/xdIZYeWxkPA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYMh3WNyvYmriGhF1UG5zRpAi_nw.png",
    songUrl: "./songs/Tango-REMIX.mp3",
  },
  {
    id: 5,
    name: "Wii mii theme",
    artist: "Nintendo",
    genre: "ElevatorMusic",
    albumCoverUrl: "https://i.ytimg.com/vi/LYN6DRDQcjI/hqdefault.jpg",
    songUrl: "./songs/Wii-Theme.mp3",
  },
];

app.get("/songs", (req, res) => {
  res.status(200).send({
    songs,
  });
});

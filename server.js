var cors = require("cors");
const app = require("express")();
const express = require("express");
app.use(cors());
app.use("/static", express.static("public"));
const port = 3000;

app.listen(process.env.PORT || port, () =>
  console.log(`sever is running on port ${port}`)
);

const songs = [
  {
    id: 1,
    name: "100 miles",
    artist: "Skinbone",
    genre: "HipHop",
    albumCoverUrl:
      "https://i1.sndcdn.com/artworks-000633561964-409g0f-t500x500.jpg",
    songUrl: "/static/songs/100-Miles.mp3",
  },
  {
    id: 2,
    name: "ass clap",
    artist: "Van",
    genre: "Gachi",
    albumCoverUrl:
      "https://i1.sndcdn.com/artworks-9Gt2zdNpPfaUqrl0-kGZ9VQ-t500x500.jpg",
    songUrl: "/static/songs/ass-clap.mp3",
  },
  {
    id: 3,
    name: "Fisk til mig",
    artist: "Galaxybois",
    genre: "DanishPop",
    albumCoverUrl: "https://i.ytimg.com/vi/4R8SPzu7NcU/maxresdefault.jpg",
    songUrl: "/static/songs/fisk-til-mig.mp3",
  },
  {
    id: 4,
    name: "Min kan den danser tango remix",
    artist: "STAMPE",
    genre: "Electronic",
    albumCoverUrl:
      "https://i.ytimg.com/vi/xdIZYeWxkPA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYMh3WNyvYmriGhF1UG5zRpAi_nw.png",
    songUrl: "/static/songs/Tango-REMIX.mp3",
  },
  {
    id: 5,
    name: "Wii mii theme",
    artist: "Nintendo",
    genre: "ElevatorMusic",
    albumCoverUrl: "https://i.ytimg.com/vi/LYN6DRDQcjI/hqdefault.jpg",
    songUrl: "/static/songs/Wii-Theme.mp3",
  },

  {
    id: 6,
    name: "All I Want for Christmas Is You",
    artist: "Mariah Carey",
    genre: "ChristmasMusic",
    albumCoverUrl:
      "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F7a640f655f9f156e5ed19f58d6e32131.png",
    songUrl: "/static/songs/all-i-want-for-christmas.mp3",
  },
];

const playlists = [
  {
    id: 1,
    name: "My Banger Playlist",
    coverArt:
      "https://i.scdn.co/image/ab67706c0000bebb1bf14bcf4226d2b0d5a0c0e6",
    songId: [1, 3, 5],
  },
  {
    id: 2,
    name: "Christmas Playlist",
    coverArt:
      "https://i0.wp.com/cottageintheoaks.com/wp-content/uploads/Christmas-Playlist-created-by-Cottage-in-the-Oaks-600x600.jpg",
    songId: [2, 6],
  },
];

app.get("/songs", (req, res) => {
  res.status(200).send({
    songs,
  });
});

app.get("/playlists", (req, res) => {
  res.status(200).send({
    playlists,
  });
});

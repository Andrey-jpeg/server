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
    albumCoverUrl: "https://img.youtube.com/vi/Cwkej79U3ek/maxresdefault.jpg",
    songUrl: "/static/songs/100-Miles.mp3",
  },
  {
    id: 2,
    name: "ass clap",
    artist: "Van",
    genre: "Gachi",
    albumCoverUrl: "https://img.youtube.com/vi/y3YHnkCDnKY/maxresdefault.jpg",
    songUrl: "/static/songs/ass-clap.mp3",
  },
  {
    id: 3,
    name: "Fisk til mig",
    artist: "Galaxybois",
    genre: "DanishPop",
    albumCoverUrl: "https://img.youtube.com/vi/JyLCedJJ_Yk/mqdefault.jpg",
    songUrl: "/static/songs/fisk-til-mig.mp3",
  },
  {
    id: 4,
    name: "Min kan den danser tango remix",
    artist: "STAMPE",
    genre: "Electronic",
    albumCoverUrl:
      "https://i.scdn.co/image/ab67616d0000b273b3247d420d91678b6041209d",
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
  {
    id: 7,
    name: "We Are One",
    artist: "Vexento ",
    genre: "Dance & Electronic",
    albumCoverUrl: "https://img.youtube.com/vi/Ssvu2yncgWU/maxresdefault.jpg",
    songUrl: "/static/songs/we-are-one.mp3",
  },
  {
    id: 8,
    name: "Kontekst",
    artist: "Buddha",
    genre: "Dance & Electronic",
    albumCoverUrl: "https://img.youtube.com/vi/-K_YSjqKgvQ/maxresdefault.jpg",
    songUrl: "/static/songs/kontekst.mp3",
  },
  {
    id: 9,
    name: "Last Summer",
    artist: "Ikson",
    genre: "House",
    albumCoverUrl: "https://img.youtube.com/vi/n2oTA5JSk80/maxresdefault.jpg",
    songUrl: "/static/songs/last-summer.mp3",
  },
  {
    id: 10,
    name: "Happy Life",
    artist: "Fredji",
    genre: "House",
    albumCoverUrl: "https://img.youtube.com/vi/u4PI5p5bI9k/maxresdefault.jpg",
    songUrl: "/static/songs/happy-life.mp3",
  },
  {
    id: 11,
    name: "Up In My Jam (All Of A Sudden)",
    artist: "Kubbi",
    genre: "Dance & Electronic",
    albumCoverUrl: "https://img.youtube.com/vi/tDexBj46oNI/maxresdefault.jpg",
    songUrl: "/static/songs/up-in-my-jam.mp3",
  },
  {
    id: 12,
    name: "Stockholm Sunset",
    artist: "Arc De Soleil",
    genre: "Dance & Electronic",
    albumCoverUrl:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/sunshine_944.jpg",
    songUrl: "/static/songs/stockholm-sunset.mp3",
  },
  {
    id: 13,
    name: "Mango Lover",
    artist: "Arc De Soleil",
    genre: "Pop",
    albumCoverUrl:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/sunshine_944.jpg",
    songUrl: "/static/songs/stockholm-sunset.mp3",
  },
  {
    id: 14,
    name: "Wild Flower",
    artist: "Eco Village",
    genre: "Dance & Electronic",
    albumCoverUrl:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
    songUrl: "/static/songs/wild-flower.mp3",
  },
  {
    id: 15,
    name: "Endless Horizon",
    artist: "Eco Village",
    genre: "House",
    albumCoverUrl:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
    songUrl: "/static/songs/wild-flower.mp3",
  },
  {
    id: 16,
    name: "Wings of Fire",
    artist: "Eco Village",
    genre: "Rock",
    albumCoverUrl:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
    songUrl: "/static/songs/wild-flower.mp3",
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
    name: "The Christmas Playlist",
    coverArt:
      "https://i0.wp.com/cottageintheoaks.com/wp-content/uploads/Christmas-Playlist-created-by-Cottage-in-the-Oaks-600x600.jpg",
    songId: [2, 6],
  },
  {
    id: 3,
    name: "Certified Banger Playlist",
    coverArt:
      "https://pbs.twimg.com/profile_images/943046122125197312/D6iFJCqf_400x400.jpg",
    songId: [3, 4],
  },
  {
    id: 4,
    name: "Yfitops Top Tracks",
    coverArt:
      "https://raw.githubusercontent.com/Andrey-jpeg/server/main/public/images/yfitops-top-tracksBG.png",
    songId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
];

const albums = [
  {
    id: 1,
    name: "Sunshine",
    artist: "Arc De Soleil",
    coverArt:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/sunshine_944.jpg",
    songId: [12, 13, 13, 12, 13, 12, 13, 12, 12, 13],
  },
  {
    id: 2,
    name: "Wanderlust",
    artist: "Eco Village",
    coverArt:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
    songId: [14, 15, 16, 15, 14, 16, 14, 15, 16, 14],
  },
];

const recentlyFeatured = [
  {
    id: 1,
    name: "Mariah Carey",
    coverArt:
      "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F7a640f655f9f156e5ed19f58d6e32131.png",
    type: "Artist",
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

app.get("/albums", (req, res) => {
  res.status(200).send({
    albums,
  });
});

app.get("/recentlyFeatured", (req, res) => {
  res.status(200).send({
    recentlyFeatured,
  });
});

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
    songId: [12, 13],
  },
  {
    id: 2,
    name: "Wanderlust",
    artist: "Eco Village",
    coverArt:
      "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
    songId: [14, 15, 16],
  },
];


const homescreen = [
  //Each title is an object
  //Change horizontal to false if horizontal is wanted.
  {
    id: 1,
    title: 'Recently played',
    horizontal: true,
    data: [
      {
        text: "Skinbone",
        uri: "https://img.youtube.com/vi/Cwkej79U3ek/maxresdefault.jpg",
      },
      {
        text: 'Wanderlust',
        uri: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg',
      },
      {
        text: 'Sunshine',
        uri: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/sunshine_944.jpg',
      },
      {        
        text: 'recently played 1',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        text: 'recently played 2',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    id: 2,
    title: 'New Releases',
    horizontal: true,
    data: [
      {
        text: 'Skinbone',
        uri: "https://img.youtube.com/vi/Cwkej79U3ek/maxresdefault.jpg",
      },
    ],  
  },
  {
    id: 3,
    title: 'Featured',
    horizontal: true,
    data: [
      {
        text: 'All I want for Christmas is you',
        uri: "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F7a640f655f9f156e5ed19f58d6e32131.png",
      },
      {
        text: 'Hardest to Love',
        uri: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',
      },
      {
        text: 'featured 2',
        uri: 'https://picsum.photos/id/1024/200',
      },
    ],
  },
  {
    id: 4,
    title: 'Hits',
    horizontal: true,
    data: [
      {
        text: 'Real Life',
        uri: 'https://pbs.twimg.com/media/CRmgSqtUAAET5Kn.png',
      },
      {
        text: 'Party Monster',
        uri: 'https://upload.wikimedia.org/wikipedia/en/d/d7/The_Weeknd_-_Party_Monster.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Workout',
    horizontal: true,
    data: [
      {
        text: 'The Weekend',
        uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fthe-weeknd-party-monster-music-video-0.jpg?w=960&cbr=1&q=90&fit=max',
      },
      {
        text: 'workout 2',
        uri: 'https://picsum.photos/id/1024/200',
      },
    ],
  },
  {
    id: 6,
    title: 'Mood',
    horizontal: true,
    data: [
      {
        text: 'Happy',
        uri: 'https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-videoSixteenByNineJumbo1600.jpg',
      },
      {
        text: 'Cozy',
        uri: 'https://media.istockphoto.com/photos/still-life-home-comfort-in-the-living-room-picture-id1171746484?k=20&m=1171746484&s=612x612&w=0&h=PFragjXOHNbv5mNQd4Gc5tRSUXrCWUib7l0S8MByuAk=',
      },
      {
        text: 'Sad',
        uri: 'https://images.ctfassets.net/cnu0m8re1exe/5ky2lGqMYTU3yoeT6dI1P/6764f49b988b06a9cd86451435f4538e/sad.png?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
      },
    ],
  },

];
const artists = [
  {
    id: 1,
    name: "The Weekend",
    imgUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fthe-weeknd-party-monster-music-video-0.jpg?w=960&cbr=1&q=90&fit=max"
  }
];

const artistSongs = [
  {
    id: 1,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Weeknd_-_Party_Monster.jpg",
    songName: "Party Monster",
    album: "Starboy",
  },
  {
    id: 2,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
    songName: "Hardest To Love",
    album: "After Hours",
  },
  {
    id: 3,
    imgUrl: "https://pbs.twimg.com/media/CRmgSqtUAAET5Kn.png",
    songName: "Real Life",
    album: "Beauty Behind The Madness",
  },

]




app.get("/homescreen", (req, res) => {
  res.status(200).send({
    homescreen,
  });
});

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

app.get("/featured", (req, res) => {
  res.status(200).send({
    featured,
  });
});

app.get("/artists", (req, res) => {
  res.status(200).send({
    artists,
  });
});

app.get("/artistSongs", (req, res) => {
  res.status(200).send({
    artistSongs,
  });
});

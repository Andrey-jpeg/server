const { ObjectId } = require("bson");
const { json } = require("express");
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/songs").get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("songs")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route("/playlistsbasic").get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("playlists")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        const playlists = result;
        res.send({ playlists });
      }
    });
});

recordRoutes.route("/recentlyplayed").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("recentlyplayed")
    .aggregate([
      {
        $lookup: {
          from: "songs",
          localField: "recentlyplayed",
          foreignField: "_id",
          as: "recentlyplayed",
        },
      },
    ])
    .toArray((err, result) => {
      if (err) {
        res.status(400).send("Error getting recentlyplayed!");
        return console.log(err);
      } else {
        const recentlyplayed = result;
        res.send({ recentlyplayed });
      }
    });
});

recordRoutes.route("/albums").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("albums")
    .aggregate([
      {
        $lookup: {
          from: "songs",
          localField: "songs",
          foreignField: "_id",
          as: "songs",
        },
      },
      {
        $lookup: {
          from: "artists",
          localField: "artist_id",
          foreignField: "_id",
          as: "artist_id",
        },
      },
      {
        $unwind: {
          path: "$songs",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "artists",
          localField: "songs.artist_id",
          foreignField: "_id",
          as: "songs.artist_id",
        },
      },

      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          artist_id: { $first: "$artist_id" },
          coverArt: { $first: "$coverArt" },
          songs: { $push: "$songs" },
        },
      },
    ])

    .toArray((err, result) => {
      if (err) {
        res.status(400).send("Error getting albums!");
        return console.log(err);
      } else {
        const albums = result;
        res.send({ albums });
      }
    });
});

recordRoutes.route("/playlists").get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("playlists")
    .aggregate([
      {
        $lookup: {
          from: "songs",
          localField: "songs",
          foreignField: "_id",
          as: "songs",
        },
      },
      {
        $unwind: {
          path: "$songs",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "artists",
          localField: "songs.artist_id",
          foreignField: "_id",
          as: "songs.artist_id",
        },
      },

      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          coverArt: { $first: "$coverArt" },
          songs: { $push: "$songs" },
        },
      },
    ])
    .toArray((err, result) => {
      if (err) {
        res.status(400).send("Error getting playlists!");
        return console.log(err);
      } else {
        const playlists = result;
        res.send({ playlists });
      }
    });
});
/*
recordRoutes
  .route("/playlists/:playlistID/songs")
  .get(async function (req, res) {
    const dbConnect = dbo.getDb();

    //res.get(req.params);
    let playlistID = req.params.playlistID;
    let thisplaylist = [];
    console.log(playlistID);
    dbConnect
      .collection("playlists")
      .find({ _id: ObjectId(playlistID) })
      .limit(50)
      .toArray(function (err, playlistArray) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          req.push(playlistArray);
          thisplaylist = playlistArray;
          console.log(playlistArray);
        }
      });
*/
/*
recordRoutes.route("/playlistsagg").get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("playlists")
    .aggregate([
      {
        $lookup: {
          from: "songs",
          localField: "songs",
          foreignField: "_id",
          as: "songs",
        },
      },
    ])
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});*/

/*
      .collection("songs");
    playlistArray
      .forEach((song) => {
        console.log(playlistArray.songs[song]);
      })
      .find({ _id })
      .toArray(function (err, playlistArray) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          thisplaylist = playlistArray;
          console.log(playlistArray);
        }
      });
    console.log(thisplaylist);
    //let playlistJSON = playlistArray;
    //console.log(myplaylist);
    //let songArray = myplaylist[(0)[songs]];
    /*dbConnect.toArray(function (err) {
      if (err) {
        res.status(400).send("oops");
      } else {
        //res.json(songArray);
      }
    });
  });*/

// Create a new song.
/*
recordRoutes.route("/playlist/addplaylist").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    name: req.body.name,
    coverArt: req.body.coverArt,
    songs: req.body.songs,
  };

  dbConnect
    .collection("matches")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting matches!");
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});
*/

//Needs to be made into calls to database at some point:
const homescreen = [
  //Each title is an object
  //Change horizontal to false if horizontal is wanted.
  {
    id: 1,
    title: "Recently played",
    horizontal: true,
    data: [
      {
        text: "Skinbone",
        uri: "https://img.youtube.com/vi/Cwkej79U3ek/maxresdefault.jpg",
      },
      {
        text: "Wanderlust",
        uri: "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/wanderlust_400.jpg",
      },
      {
        text: "Sunshine",
        uri: "https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/sunshine_944.jpg",
      },
      {
        text: "recently played 1",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        text: "recently played 2",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    id: 2,
    title: "New Releases",
    horizontal: true,
    data: [
      {
        text: "Party Monster",
        uri: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Weeknd_-_Party_Monster.jpg",
      },
      {
        text: "The Weekend",
        uri: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fthe-weeknd-party-monster-music-video-0.jpg?w=960&cbr=1&q=90&fit=max",
      },
      {
        text: "Skinbone",
        uri: "https://img.youtube.com/vi/Cwkej79U3ek/maxresdefault.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Featured",
    horizontal: true,
    data: [
      {
        text: "All I want for Christmas is you",
        uri: "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F7a640f655f9f156e5ed19f58d6e32131.png",
      },
      {
        text: "Hardest to Love",
        uri: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
      },
      {
        text: "featured 2",
        uri: "https://picsum.photos/id/1024/200",
      },
    ],
  },
  {
    id: 4,
    title: "Hits",
    horizontal: true,
    data: [
      {
        text: "Real Life",
        uri: "https://pbs.twimg.com/media/CRmgSqtUAAET5Kn.png",
      },
      {
        text: "Party Monster",
        uri: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Weeknd_-_Party_Monster.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Workout",
    horizontal: true,
    data: [
      {
        text: "The Weekend",
        uri: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fthe-weeknd-party-monster-music-video-0.jpg?w=960&cbr=1&q=90&fit=max",
      },
      {
        text: "workout 2",
        uri: "https://picsum.photos/id/1024/200",
      },
    ],
  },
  {
    id: 6,
    title: "Mood",
    horizontal: true,
    data: [
      {
        text: "Happy",
        uri: "https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-videoSixteenByNineJumbo1600.jpg",
      },
      {
        text: "Cozy",
        uri: "https://media.istockphoto.com/photos/still-life-home-comfort-in-the-living-room-picture-id1171746484?k=20&m=1171746484&s=612x612&w=0&h=PFragjXOHNbv5mNQd4Gc5tRSUXrCWUib7l0S8MByuAk=",
      },
      {
        text: "Sad",
        uri: "https://images.ctfassets.net/cnu0m8re1exe/5ky2lGqMYTU3yoeT6dI1P/6764f49b988b06a9cd86451435f4538e/sad.png?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
      },
    ],
  },
];
const artists = [
  {
    id: 1,
    name: "The Weekend",
    imgUrl:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fthe-weeknd-party-monster-music-video-0.jpg?w=960&cbr=1&q=90&fit=max",
  },
  {
    id: 2,
    name: "Mariah Carey",
    imgUrl:
      "https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F7a640f655f9f156e5ed19f58d6e32131.png",
  },
  {
    id: 3,
    name: "Vexento",
    imgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLSkA7EY9M3BDPtg3bz98feEifUzDbhG7kMhr9gWEw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    name: "Arc De Soleil",
    imgUrl:
      "https://lite-images-i.scdn.co/image/ab6761610000e5ebc2be39210a66f75954b9d3f1",
  },
  {
    id: 5,
    name: "Eco Village",
    imgUrl:
      "https://www.matookerepublic.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-08-31-at-2.15.11-PM-554x375.jpeg",
  },
];

const artistSongs = [
  {
    id: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Weeknd_-_Party_Monster.jpg",
    songName: "Party Monster",
    album: "Starboy",
  },
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
    songName: "Hardest To Love",
    album: "After Hours",
  },
  {
    id: 3,
    imgUrl: "https://pbs.twimg.com/media/CRmgSqtUAAET5Kn.png",
    songName: "Real Life",
    album: "Beauty Behind The Madness",
  },
  {
    id: 4,
    imgUrl:
      "https://urbando.dk/wp-content/uploads/2021/02/814PdZJQfeL._SL1400_.jpg",
    songName: "Hej!",
    album: "Hejsa!",
  },
];

recordRoutes.route("/homescreen").get(async function (_req, res) {
  res.status(200).send({
    homescreen,
  });
});

recordRoutes.route("/artists").get(async function (_req, res) {
  res.status(200).send({
    artists,
  });
});

recordRoutes.route("/artistSongs").get(async function (_req, res) {
  res.status(200).send({
    artistSongs,
  });
});

module.exports = recordRoutes;

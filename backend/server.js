"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {top50} = require("./data/top50");


express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
.get("/top50", (req, res) => {
  const data = top50;

  
  res.status(200).json({status:200, data})
}
)


.get('/top50/song/:id', (req, res) => {
  console.log("THIS IS THE ID",req.params.id);
  const songRank = req.params.id;
  const data = top50[songRank - 1];

res.status(200).json({
      status: 200, data
    })
  
  })



.get('/top50/artist/:artistName', (req, res) => {
    console.log("THIS IS THE ARTIST",top50[1]);
    const artist = req.params.artistName;
    let data = [] ;
  top50.filter(element => {
    if(element.artist.toLowerCase() === artist){
data.push(element)};
  })
  res.status(200).json({
        status: 200, data
      })
    
    })

.get('/top50/popular-artist/', (req, res) => {

      let artistsArr = [] ;
    top50.filter(element => {
      artistsArr.push(element.artist.toLowerCase())
    });

    const mostPopArtist = artistsArr.reduce((previous, current, i, arr) => {
      if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });
    
    const MostPopularSongs = [];
    top50.filter(song => {
      if(song.artist.toLocaleLowerCase() === mostPopArtist)
  {MostPopularSongs.push(song)}
});


    res.status(200).json({
          status: 200, MostPopularSongs
        })
      
      })



.get("/top50/artist" , (req,res) => {
const filteredArtist = top50.map(song => song.artist);
console.log("ARTIST",filteredArtist )
const AllArtists = [...new Set(filteredArtist)];

  res.status(200).json({ status: 200, AllArtists})
})


  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));

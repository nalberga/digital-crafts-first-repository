const wallpaper = require("wallpaper");
const axios = require("axios");
const download = require("download-file");

  axios.get("https://dog.ceo/api/breeds/image/random")

  .then((response) => {
    const url = response.data.message;

    const options = {
      directory:"./wallpapers/",
      filename: "dog.jpg"
    }

      download(url, options, function(err) {
        if (err) return console.error(err);
        wallpaper.set("./wallpapers/dog.jpg");
   
        
    })
  });
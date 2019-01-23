var axios = require("axios");

function get_movie(movie_name){
    
  var url = "http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy";

  axios.get(url).then(
    function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Rotten Tommatoes Rating: " + response.data.Ratings[0].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log('-------------------');
        //console.log(response.data.Ratings[0].Value);
        return response.data.imdbRating;
    }
  ); 

}

module.exports = {
    get_movie: get_movie
}


